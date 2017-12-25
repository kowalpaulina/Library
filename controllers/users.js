const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Book = require('../models/books');
const User = require('../models/users');


router.get('/', function (req, res, next) {
    User.find()
        .exec(function (err, books) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Users list',
                obj: books
            });
        });
});


router.post('/register', function (req, res, next) {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10,),
        approved: false,
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User added to library',
            obj: result
        });
    });
});


// router.post('/login', function(req, res, next) {
//     User.findOne({email: req.body.email}, function(err, user) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         if (!user) {
//             return res.status(401).json({
//                 title: 'Login failed',
//                 error: {message: 'No user found'}
//             });
//         }
//         if (!bcrypt.compareSync(req.body.password, user.password)) {
//             return res.status(401).json({
//                 title: 'Login failed',
//                 error: {message: 'Invalid login credentials - wrong password'}
//             });
//         }

//         if(user.approved){
//             var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
//             res.status(200).json({
//                 message: 'Successfully logged in',
//                 token: token,
//                 userId: user._id
//             });
//         }else{
//             return res.status(401).json({
//                 title: 'Login failed',
//                 error: {message: 'User not approved'}
//             });
//         }
            

//     });
// });


module.exports = router;