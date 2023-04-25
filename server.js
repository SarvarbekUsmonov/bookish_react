// importing all necessary modules
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer')
const cors = require('cors');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/private_html/image')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });

const app = express();
const port = 4000;

app.use(cookieParser())
app.use("/*.html", authenticate);
app.use(express.static('public_html'));
app.use(express.json());
app.use(cors());

// connection to the database
const mongoURL = 'mongodb://127.0.0.1:27017/quizzy';
mongoose.connect(mongoURL, { useNewUrlParser: true });
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"))
mongoose.connection.on("error", (err) => console.log(err))

// writing schemas for the database
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    username: String,
    salt: Number,
    hash: String,
    favorites: [mongoose.ObjectId],
    listings: [mongoose.ObjectId],
    avatar: String
})

let Users = mongoose.model("Users", usersSchema);


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
    likes: [mongoose.ObjectId],
});

let Comments = mongoose.model("Comments", commentsSchema);


/*
Akbarali  start*/


var sessionKeys = {};
const period = 3000000;

// authentication
function authenticate(req, res, next) {
    // we can add more pages depending on when we want the user to create an account
    if (req.baseUrl === "/Index" || req.baseUrl === "/Search" || req.baseUrl === "/View") {
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
    const user = req.cookies.login;

    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year;
    const genre = req.body.genre;
    const description = req.body.description;
    const image =req.body.image;
    
    const book = new Books({title, author, comments: [], rating: [], year, genre, description, image, user});
    await book.save();
})
// 4/24/2023
// route for getting the book based on the id of the book as a JSON object
app.get('/viewBookData/:id', async (req, res) => {
    const id = req.params.id;
    const book = await Books.findById(id).exec();
    res.send(book);
})
// route for getting the comments based on the id of the book as a list of JSON objects, which contains
// the avatar of the user, author, rating, comment and comment Id
app.get('/getCommentInfo/:id', async (req, res) => {
    const id = req.params.id;
    const book = await Books.findById(id).exec();
    const comments = book.comments;
    let commentInfo = [];
    for (let i = 0; i < comments.length; i++) {
        const comment = await Comments.findById(comments[i]).exec();
        commentInfo.push({
            avatar: comment.user.avatar,
            author: comment.user.username,
            rating: comment.rating,
            comment: comment.comment,
            commentId: comment._id
        })
    }
    res.send(commentInfo);
})
// post route for liking a comment
// where the req.body would contain the commentId and the userId
// and it has to return the number of likes for that comment
// if it is already liked, then it should unlike it and return the number of likes
app.post('/likeComment', async (req, res) => {
    const commentId = req.body.commentId;
    const userId = req.body.userId;
    const comment = await Comments.findById(commentId).exec();
    const likes = comment.likes;
    // if the user has already liked the comment, then unlike it
    if (likes.includes(userId)) {
        const index = likes.indexOf(userId);
        likes.splice(index, 1);
        comment.likes = likes;
        await comment.save();
        res.send({likes: likes.length});
    } else {
        likes.push(userId);
        comment.likes = likes;
        await comment.save();
        res.send({likes: likes.length});
    }
})
// post route, body of which contains the userId, rating and comment as a string, bookId 
// returns JSon like {"added": true}, or {"added": false} if the user has already commented, the user
// can only comment once
app.post('/rateandcomment', async (req, res) => {
    const userId = req.body.userId;
    const rating = req.body.rating;
    const comment = req.body.comment;
    const bookId = req.body.bookId;
    const book = await Books.findById(bookId).exec();
    const comments = book.comments;
    // check if the user has already commented
    for (let i = 0; i < comments.length; i++) {
        const comment = await Comments.findById(comments[i]).exec();
        if (comment.user == userId) {
            res.send({added: false});
            return;
        }
    }
    // if the user has not commented, then add the comment
    const newComment = new Comments({user: userId, rating, comment, likes: []});
    await newComment.save();
    comments.push(newComment._id);
    book.comments = comments;
    await book.save();
    res.send({added: true});
})
// post route for favourting a book
// body of the request contains the userId and the bookId
// returns {"added": true} if the book is added to the favourites, {"added": false} if the book is already in the favourites
app.post('/favoriteBook', async (req, res) => {
    const userId = req.body.userId;
    const bookId = req.body.bookId;
    const user = await Users.findById(userId).exec();
    const favorites = user.favorites;
    if (favorites.includes(bookId)) {
        res.send({added: false});
    } else {
        favorites.push(bookId);
        user.favorites = favorites;
        await user.save();
        res.send({added: true});
    }
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
    const comments = await Comments.find({book: bookId}).exec();
    res.send(comments)
    console.log(comments);
})

// route for changing the avatr of the user
app.post('/update/avatar', upload.single('newAvatar'), (req, res) => {
    const username = req.cookies.login.username;
    const fileName = req.file.filename;
    Users.updateOne({username}, {avatar: fileName}).exec();
    res.redirect('/settings.html');
});

// post to change the password
app.post('/update/password', async (req, res) => {
    const username = req.cookies.login.username;
    const { oldPassword, newPassword } = req.body;

    const response = await Users.findOne({username}).exec();
    
    // verify old password
    var hash = crypto.createHash('sha3-256');
    var toHash = oldPassword + response.salt;
    dataa = hash.update(toHash, 'utf-8');
    hashed = dataa.digest('hex');

    // stop if the old password is incorrect
    if (hashed !== response.hash) {
        console.log('incorrect password');
        res.sendStatus(404);
        return;
    }

    // hash the new password
    hash = crypto.createHash('sha3-256');
    let salt = Math.floor(Math.random() * 1000000);
    toHash = newPassword + salt;
    data = hash.update(toHash, 'utf-8');
    let gen_hash = data.digest('hex');
    Users.updateOne({username}, {salt, hash: gen_hash}).exec();
    res.sendStatus(200)

});
// route for clearing the cookies
app.post('/clear/cookies', (req, res) => {
    res.clearCookie('login');
    res.sendStatus(200);
});

app.get('/viewBookData/:bookId', (req, res) => {
    const bookId = req.params.bookId;

    Books.find({author: bookId }).then((data) => {
        res.send(JSON.stringify(data));
    }).catch((err) => {
        console.log(err);
        res.send({"data": 'Error'});
    });
});

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));