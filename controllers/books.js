//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const Book = require('../models/books');


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
                message: 'Book has been added',
                obj: books
            });
        });
});


router.get('/:id/edit', function (req, res, next) {
    // let id = req.params._id;
    Book.findOne({_id:req.params.id}, function (err, book){
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
        book.author = req.body.author,
        book.title = req.body.title,
        book.read = req.body.read,
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












//GET HTTP method to /bucketlist
// router.get('/',(req,res) => {
// 	bucketlist.getAllLists((err, lists)=> {
// 		if(err) {
// 			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
// 		}
// 		else {
// 			res.write(JSON.stringify({success: true, lists:lists},null,2));
// 			res.end();	
			
// 	}	
// 	});
// });


// //POST HTTP method to /bucketlist

// router.post('/', (req,res,next) => {
// 	console.log(req.body);
// 	let newList = new bucketlist({
// 		title: req.body.title,
// 		description: req.body.description,
// 		category: req.body.category
// 	});
// 	bucketlist.addList(newList,(err, list) => {
// 		if(err) {
// 			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

// 		}
// 		else 
// 			res.json({success:true, message: "Added successfully."});
	
// 	});
// });


// //DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
// router.delete('/:id', (req,res,next)=> {
// 	let id = req.params.id;
// 	console.log(id);
// 	bucketlist.deleteListById(id,(err,list) => {
// 		if(err) {
// 			res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
// 		}
// 		else if(list) {
// 			res.json({success:true, message: "Deleted successfully"});
// 		}
// 		else
// 			res.json({success:false});
// 	})
// });

module.exports = router;
