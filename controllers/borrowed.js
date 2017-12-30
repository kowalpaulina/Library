const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Book = require('../models/books');
const User = require('../models/users');



router.get('/:id', function (req, res) {
    console.log("id", req.params.id);
    User
    .findOne({_id:req.params.id}, function (err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'An error occurred',
                error: {message: 'User not found'}
            });
        }
        res.status(200).json({
                message: 'Logged user',
                obj: user
            });

    })

});

module.exports = router;