
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const User = require('./users');

const books = new Schema({
    author: {
        type: String, 
        required: true,
        trim: true,
    },
    title: {
        type: String, 
        required: true,
        trim: true,
    },
    read: {
        type: Boolean, 
    },
    lend: {
        type: Boolean, 
    },
    borrower: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },
    dateFrom: {
        type: String, 
    },
    dateTo: {
        type: String, 
    },
    created: {
        type: Date, 
        default: Date.now,
    },
    reservedByUsers: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },
});

module.exports = mongoose.model('Books', books);