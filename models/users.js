
//Require mongoose package
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongooseUniqueValidator = require('mongoose-unique-validator');
let Books = require('../models/books');




var user = new Schema({
    name: {
        type: String, 
        trim: true,
        required: 'Name is required',
    },

    email: {
        type: String, 
        unique: true,
        lowercase: true,
        trim: true,
        required: 'Email is required',
    },
    password: {
        type: String,
        required: 'Password is required',
    },
    approved: {
        type: Boolean, 
    },
    booksBorrowed: {
        type: [{type: Schema.Types.ObjectId, ref: 'Books'}]
    },
    reservedBooks: {
        type: [{type: Schema.Types.ObjectId, ref: 'Books'}]
    },
});

user.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', user);
