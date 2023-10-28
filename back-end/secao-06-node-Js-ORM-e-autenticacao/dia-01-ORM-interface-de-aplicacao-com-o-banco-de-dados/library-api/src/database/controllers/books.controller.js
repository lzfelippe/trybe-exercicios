const BooksService = require('../services/books.service');

const getAll = async (req, res) => {
    const { author } = req.query;
    let books;
    if (author) {
        books = await BooksService.getByAuthor(author);
    } else {
        books = await BooksService.getAll();
    }
    return res.status(200).json(books);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    if (!book) return res.status(404).json({message: 'Book not found'});
    return res.status(200).json(book)
};

const createBook = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BooksService.createBook({ title, author, pageQuantity, publisher });
    return res.status(201).json(newBook);
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BooksService.updateBook(id, { title, author, pageQuantity, publisher });
    if (!updatedBook) return res.status(404).json({message: 'Book not found'});
    return res.status(200).json({message: 'Book updated!'});
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const deletedBook = await BooksService.deleteBook(id);
    if (!deletedBook) return res.status(404).json({message: 'Book not found'});
    return res.status(200).json({message: 'Book deleted!'});
};

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
};