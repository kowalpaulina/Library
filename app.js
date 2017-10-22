// We will declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

//routings
const booksRoutes = require('./controllers/books');
const appRoutes = require('./controllers/app');
const usesrRoutes = require('./controllers/users');

//Connect mongoose to our database
//mongoose.connect(config.database);
mongoose.connect('localhost:27017/library-app');

//Declaring Port
const port = 3000;

//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files

*/
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/books', booksRoutes);
//app.use('/users',usersRoutes);
app.use('/', appRoutes);



//Listen to port 3000
app.listen(port, () => {
	console.log(`Starting the server at port ${port}`);
});
