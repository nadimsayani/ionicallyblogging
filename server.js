// server.js

// BASE SETUP-------------------------------------------------------------------
// =============================================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://nsayaniblog:Asap2021@ds043942.mongolab.com:43942/nsayaniblog'); // connect to our database

var users = require('./models/users');
var Articles = require('./models/article');


// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

// more routes for our API will happen here

// ROUTES FOR OUR API/USERS
// ==============================================================================
router.route('/users')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .post(function (req, res) {

        var user = new users();      // create a new instance of the Bear model
        user.FirstName = req.body.FirstName;  // set the bears name (comes from the request)
        user.LastName = req.body.LastName;
        user.Email = req.body.Email;
        user.Password = req.body.Password;
        // save the bear and check for errors
        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'User created!'});
        });

    });

router.route('/login')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .post(function (req, res) {

        var user = new users();      // create a new instance of the Bear model
        user.Email = req.body.Email;
        user.Password = req.body.Password;

        User.find({username: req.body.Email}, function (err, user) {
            if (err) throw err;
            res.send(err);

            res.json({message: '1'});
        });
    });
// ROUTES FOR OUR API/POSTS
// ==============================================================================
router.route('/post')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .post(function (req, res) {

        var user = new users();      // create a new instance of the Bear model
        user.Email = req.body.Email;
        user.Password = req.body.Password;

        User.find({username: req.body.Email}, function (err, user) {
            if (err) throw err;
            res.send(err);

            res.json({message: '1'});
        });
    });

//posts update with a put
router.route('/post')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .put(function (req, res) {

        var user = new users();      // create a new instance of the Bear model
        user.Email = req.body.Email;
        user.Password = req.body.Password;

        User.find({username: req.body.Email}, function (err, user) {
            if (err) throw err;
            res.send(err);

            res.json({message: '1'});
        });
    });

//posts update with a put
router.route('/post')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .put(function (req, res) {

        var user = new users();      // create a new instance of the Bear model
        user.Email = req.body.Email;
        user.Password = req.body.Password;

        User.find({username: req.body.Email}, function (err, user) {
            if (err) throw err;
            res.send(err);

            res.json({message: '1'});
        });
    });

//get individual post
router.route('/post')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .get(function (req, res) {

        var user = new users();      // create a new instance of the Bear model
        user.Email = req.body.Email;
        user.Password = req.body.Password;

        User.find({username: req.body.Email}, function (err, user) {
            if (err) throw err;
            res.send(err);

            res.json({message: '1'});
        });
    });

//get all posts
router.route('/posts')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .get(function (req, res) {

        var user = new users();      // create a new instance of the Bear model
        user.Email = req.body.Email;
        user.Password = req.body.Password;

        User.find({username: req.body.Email}, function (err, user) {
            if (err) throw err;
            res.send(err);

            res.json({message: '1'});
        });
    });

//ROUTES FOR OUR API/USERS
// ==============================================================================
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ==============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);