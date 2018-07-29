const Book = require('../models/book.model.js');

const { validationResult } = require('express-validator/check');

exports.booksList = (req, res) => {
	Book.find()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			console.log(err);
			res.status(400).send('unable to fetch books');
		});
};

exports.getBookById = (req, res) => {
	Book.findById({ _id: req.params.id })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			console.log(err);
			res.status(400).send('unable to fetch books');
		});
};

exports.addBook = (req, res) => {
	let newBook = new Book(req.body);
	console.log(newBook);

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	newBook
		.save()
		.then(data => {
			res.send('Success: Data submitted');
		})
		.catch(err => {
			console.log(err);
			res.status(400).send('Error: unable to save data');
		});
};
