const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Book = require('../models/books');
const User = require('../models/users');




router.post('/', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'No user found'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials - wrong password'}
            });
        }

        if(user.approved || user.friend){
            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id,
                approved: user.approved
            });
        }else{
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'User not approved or not a friend of library'}
            });
        }
            

    });
});


module.exports = router;