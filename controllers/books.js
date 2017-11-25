//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const Book = require('../models/books');
const User = require('../models/users');


router.get('/', function (req, res, next) {
    Book.find()
        .exec(function (err, books) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Books list',
                obj: books
            });
        });
});


router.get('/:id/edit', function (req, res, next) {
    Book
    .findOne({_id:req.params.id}, function (err, book){
        if (err) {
            return res.status(500).json({
                title: 'No books',
                error: err
            });
        }
        if (!book) {
            return res.status(500).json({
                title: 'No Book Found!',
                error: {message: 'Book not found'}
            });
        }
        res.status(200).json({
                message: 'Clicked book to edit',
                obj: book
            });

    })

});


router.post('/new', function (req, res, next) {
    let book = new Book({
        author: req.body.author,
        title: req.body.title,
        read: req.body.read,
        lend: req.body.lend,
        borrower: req.body.borrower,
        dateFrom: req.body.dateFrom,
        dateTo: req.body.dateTo,
    });
    book.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved book',
            obj: result
        });
    });
});





router.patch('/:id/edit', function (req, res, next) {
    Book.findById(req.params.id, function (err, book) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!book) {
            return res.status(500).json({
                title: 'No Book Found!',
                error: {message: 'Book not found'}
            });
        }
        if(book.borrower){
            var previousBorrower = book.borrower.toString();
            console.log("previousBorrower",previousBorrower);
        }
        
        book.author = req.body.author,
        book.title = req.body.title,
        book.read = req.body.read,
        book.lend = req.body.lend,
        book.borrower = req.body.borrower,
        book.dateFrom = req.body.dateFrom,
        book.dateTo = req.body.dateTo;
        
        if(book.borrower){
            var currentBorrower = book.borrower.toString();
            console.log("currentBorrower",currentBorrower);
        }


        if(previousBorrower){

            if(currentBorrower){
                    if(previousBorrower != currentBorrower){
                        User.findById(previousBorrower, function(err, user){
                            if (err) {
                                return res.status(500).json({
                                    title: 'An error occurred',
                                    error: err
                                });
                            }
                            user.booksBorrowed.pull(book._id);
                            user.save();
                            
                        })
                    }
            }
            
            if(currentBorrower == null){
                User.findById(previousBorrower, function(err, user){
                            if (err) {
                                return res.status(500).json({
                                    title: 'An error occurred',
                                    error: err
                                });
                            }
                            user.booksBorrowed.pull(book._id);
                            user.save();    
                        })
            }

        }


        User.findById(book.borrower, function(err, user){
            if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
            }
            if(user){
                if(!user.booksBorrowed.find(bookId=>bookId==book._id.toString())){
                    user.booksBorrowed.push(book);
                    user.save();
                }
            }else{
                
            }
        }),




        book.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated book',
                obj: result
            });
        });
    });
});



router.delete('/:id/edit', function(req, res, next) {
    Book.findById(req.params.id, function (err, book) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!book) {
            return res.status(500).json({
                title: 'No book Found!',
                error: {message: 'book not found'}
            });
        }
        book.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted book',
                obj: result
            });
        });
    });
});





module.exports = router;
