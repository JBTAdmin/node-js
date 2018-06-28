const Book = require('../models/book.model.js');

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

	newBook
		.save()
		.then(data => {
			console.log(data);
			res.send(data);
		})
		.catch(err => {
			console.log(err);
			res.status(400).send('unable to save data');
		});
};
