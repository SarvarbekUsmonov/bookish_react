const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

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

app.get('/viewBookData/:bookId', (req, res) => {
    console.log('req');
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