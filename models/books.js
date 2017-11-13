
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
    borrowedByUserId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },
    borrowedByUser: {
        name:{
            type: String,
        },
        email: {
            type: String,
        },
        approved: {
            type: Boolean,
        },
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







// //Define BucketlistSchema with title, description and category
// const booksSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     category: {
//         type: String,
//         required: true,
//         enum: ['High', 'Medium', 'Low']
//     }
// });


// //Create a model using mongoose.model and export it
// const BucketList = module.exports = mongoose.model('BucketList', BucketlistSchema );


// //BucketList.find() returns all the lists
// module.exports.getAllLists = (callback) => {
// 	BucketList.find(callback);
// }

// //newList.save is used to insert the document into MongoDB
// module.exports.addList = (newList, callback) => {
// 	newList.save(callback);
// }


// //We pass on an id and remove it from DB using Bucketlist.remove()
// module.exports.deleteListById = (id, callback) => {
// 	let query = {_id: id};
// 	BucketList.remove(query, callback);
// }

