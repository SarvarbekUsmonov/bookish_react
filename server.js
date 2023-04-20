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
    user: mongoose.ObjectId
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


/*
Akbarali  start*/




/*
Akbarali  end*/