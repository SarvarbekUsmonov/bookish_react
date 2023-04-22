const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
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


/*
Akbarali  start*/




/*
Akbarali  end*/