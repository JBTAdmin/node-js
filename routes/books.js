const express = require('express');
const router = express.Router();
const { check } = require('express-validator/check');
const bookController = require('../controllers/booksController.js');

// GET ALL BOOKS titles
router.get('/', bookController.booksList);

// GET a BOOK by id
router.get('/:id', bookController.getBookById);

router.post(
	'/add',
	[check('title').isLength({ min: 1 })],
	bookController.addBook
);

module.exports = router;
