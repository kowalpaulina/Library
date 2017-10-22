
//Require mongoose package
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




var user = new Schema({
    name: {
        type: String, 
        required: true,
    },

    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean, 
    },

    // user: {
    //     type: Schema.Types.ObjectId, 
    //     ref: 'User'
    // }
});

module.exports = mongoose.model('User', user);
