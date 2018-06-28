const express = require('express');
const router = express.Router();

const bookController = require('../controllers/booksController.js');

// GET ALL BOOKS titles
router.get('/', bookController.booksList);

// GET a BOOK by id
router.get('/:id', bookController.getBookById);

router.post('/add', bookController.addBook);

module.exports = router;
