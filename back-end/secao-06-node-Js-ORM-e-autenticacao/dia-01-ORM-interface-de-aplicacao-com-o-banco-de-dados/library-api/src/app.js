const express = require('express');
const BooksController = require('./controllers/books.controller');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!!!')
});

app.get('/books', BooksController.getAll);

app.get('/books/:id', BooksController.getById);

app.post('/books', BooksController.create);

app.put('/books/:id', BooksController.update);

app.delete('/books/id', BooksController.remove);

module.exports = app;