const { Book } = require('../models');

const getAll = async () => {
    const books = await Book.findAll({
        order: [['title', 'ASC']]
    });
    return books;
};

const getById = async (id) => {
    const book = await Book.findById(id);
    return book;
};

const createBook = async ({ title, author, pageQuantity }) => {
    const newBook = await Book.create({ title, author, pageQuantity, publisher });
    return newBook;
};

const updateBook = async (id, bookFields) => {
    const { title, author, pageQuantity } = bookFields;
    const [updatedBook] = await Book.update(
        {title, author, pageQuantity, publisher },
        { where: { id } }
    );
    return updatedBook;
};

const deleteBook = async (id) => {
    const deleted = await Book.destroy({ where: { id } });
    return deleted;
};

const getByAuthor = async (author) => {
    const book = await Book.findAll({ where: { author } });
    return book;
};


module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
    getByAuthor,
};