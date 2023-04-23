const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const multer = require('multer')
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());


app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

const User = new mongoose.Schema({
    Name: String
})

let Users = mongoose.model("User", User);

const booksSchema = new mongoose.Schema({
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

const commentsSchema = new mongoose.Schema({
    user: mongoose.ObjectId,
    rating: Number,
    comment: String,
    date: Date,
    likes: Number,
});

let Comments = mongoose.model("Comments", commentsSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
Akbarali  start*/


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
    console.log(req.body)
    const user = 'Nurkhat'

    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year;
    const genre = req.body.genre;
    const description = req.body.description;
    const image =req.body.image;
    
    const book = new Books({title, author, comments: [], rating: [], year, genre, description, image, user});
    await book.save();
})

// route for getting all books based on the title
app.get('/books/:title', async (req, res) => {
    const title = req.params.title;
    const books = await Books.find({title: {$regex: title, $options: 'i'}}).exec();
    res.send(books);
    console.log(books);
    console.log(title);
})
// route for getting all books based on the author
app.get('/books/:author', async (req, res) => {
    const author = req.params.author
    const books = await Books.find({title: {$regex: title, $options: 'i'}}).exec();
    res.send(books)
})

// route for getting all books based on the year
app.get('/books/:year', async (req, res) => {
    const year = req.params.year
    const books = await Books.find({year: year}).exec();
    res.send(books)
    console.log(books);
})
// route for getting all books based on the genre
app.get('/books/:genre', async (req, res) => {
    const genre = req.params.genre
    const books = await Books.find({genre: genre}).exec();
    res.send(books)
    console.log(books);
})

// route for getting all books based on the description

app.get('/books/:description', async (req, res) => {
    const description = req.params.description
    const books = await Books.find({description: description}).exec();
    res.send(books)
    console.log(books);
})

// route for getting all books of the user

app.get('/mybooks/', async (req, res) => {
    const user = req.cookies.login.username;
    const books = await Books.find({user: user}).exec();
    res.send(books)
    console.log(books);
})

// route for getting all comments of the particular book

app.get('/comments/:bookId', async (req, res) => {
    const bookId = req.params.bookId;

    Books.find({author: bookId }, (err, data) => {
        if (err) {
            console.log(err);
            res.send({"data": 'Error'});
        } else {
            const bookJson = {
                "Title": data[0].title,
                "Author": data[0].author,
                "Rating": data[0].rating,
                "Year": data[0].year,
                "Genre": data[0].genre,
                "Description": data[0].description,
                "Image": data[0].image,
            };
            console.log(bookJson);
            res.send(JSON.stringify(bookJson));
        }
    });
});

app.get('/somethin', (req, res) => {
    console.log('reading');
    res.end();
});

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));