const cookieParser = require("cookie-parser");
const express = require("express")
const mongoose = require("mongoose");

const multer = require('multer');
const upload = multer({dest: __dirname + '/public_html/avatars'});

const { Hash } = require("crypto");
const crypto = require('crypto');


const port = 4000;

const app = express();

app.use(cookieParser())
app.use("/*.html", authenticate);
app.use(express.static('public_html'));
app.use(express.json());


const mongoURL = 'mongodb://127.0.0.1:27017/bookish';
mongoose.connect(mongoURL, { useNewUrlParser: true });
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"))
mongoose.connection.on("error", (err) => console.log(err))

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: String,
    salt: Number,
    hash: String,
    avatar: String,
    points: Number,
    favorites: [mongoose.ObjectId],
    listings: [mongoose.ObjectId]
});

let Users = mongoose.model("Users", usersSchema);

const booksSchema = new Schema({
    title: String,
    author: String,
    comments: [mongoose.ObjectId],
    rating: [Number],
    year: Number,
    genre: String,
    description: String,
    image: String,
    user: String
});

let Books = mongoose.model("Books", booksSchema);

const commentsSchema = new Schema({
    user: mongoose.ObjectId,
    rating: Number,
    comment: String,
    date: Date,
    likes: Number,
});

let Comments = mongoose.model("Comments", commentsSchema);


var sessionKeys = {};
const period = 3000000;

// authentication
function authenticate(req, res, next) {
    // we can more pages depending on when we want the user to create an account
    if (req.baseUrl === "/index.html" || req.baseUrl === "/signUp.html" || req.baseUrl === "/help.html") {
        next();
        return;
    }
    let c = req.cookies;
    if (c && c.login){
        let result = doesUserHaveSession(c.login.username, c.login.sessionId)
        if (result){
            next()
            return;
        }
    }
    res.redirect("/");
}

function addSession(req, res) {
    const username = req.body.username;
    if (username){
        let sessionId = Math.floor(Math.random() * 10000);
        sessionKeys[username] = [sessionId, Date.now()];
        res.cookie("login", { username: username, sessionId: sessionId }, { maxAge: period });
    }
}

function doesUserHaveSession(user, sessionId) {
    let entry = sessionKeys[user];
    if (entry != undefined) {
      return entry[0] == sessionId && Date.now() - entry[1] < period;
    }
    return false;
}

app.post('/signup', async (req, res) => {
    // hash the password
    var hash = crypto.createHash('sha3-256');
    const {username, password} = req.body;
    const response = await Users.findOne({username}).exec();
    
    // stop if user already exists
    if (response) {
        console.log('USER ALREADY EXISTS');
        res.sendStatus(404);
        return;
    }
    
    // add new user
    let salt = Math.floor(Math.random() * 1000000);
    let toHash = password + salt;
    let data = hash.update(toHash, 'utf-8');
    let gen_hash = data.digest('hex');
    const user = new Users({username, salt, hash: gen_hash, avatar: "avatar.png", points: 0, favorites: [], listings: []})
    user.save();
    res.sendStatus(200);
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({username}).exec();
    if (!user) {
        console.log('USER DOES NOT EXIST');
        res.sendStatus(404);
        return;
    }
    const salt = user.salt;
    const hash = user.hash;
    var hash2 = crypto.createHash('sha3-256');
    let toHash = password + salt;
    let data = hash2.update(toHash, 'utf-8');
    let gen_hash = data.digest('hex');
    if (gen_hash === hash) {
        addSession(req, res);
        res.sendStatus(200);
    } else {
        console.log('INCORRECT PASSWORD');
        res.sendStatus(404);
    }
})
// route for posting a book
app.post('/post', async (req, res) => {
    const {title, author, year, genre, description, image} = req.body;
    const user = req.cookies.login.username;
    const book = new Books({title, author, comments: [], rating: [], year, genre, description, image, user});
    await book.save();
    res.sendStatus(200)
})




app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
