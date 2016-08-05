'use strict';

// Module dependencies //

var mongoose = require('mongoose');
var Deck = mongoose.model('Deck');
var Reading = mongoose.model('Reading');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');


exports.getCards = function (req, res) {
    // Gets Cards from Database to Program
    Deck.find({}, function (err, cards) {
        res.json({cards});
    });
};

exports.signup = function (req, res) {
    // Init Variables
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;
    var passwordConfirmation = req.body.password_confirmation;

    // User Signs Up
    if (password === passwordConfirmation) {
        var encryptPassword = bcrypt.hashSync(password, 8);
        var user = new User({firstName: firstName, lastName: lastName, email: email, password: encryptPassword});
        user.save(function () {
            res.status(200).send({message: "User Signed Up"});
        });
    }
};

exports.login = function (req, res) {
    //Init Variables
    var email = req.body.email;
    var password = req.body.password;

    // User Logs In
    User.findOne({email: email}, function (err, user) {
        var hash = user.password;
        bcrypt.compare(password, hash, function (err, result) {
            if (result) {
                req.session.firstName = user.firstName;
                req.session._id = user._id.toString();
                res.json(req.session.firstName);
                res.status(200).send({message: "User Logged In", firstName: req.session.firstName, id: req.session._id});
            } else {
                res.status(400).send({message: err});
            }
        });
    });
};

exports.logout = function (req, res) {
  // Ends Session
  req.session.destroy(function (err) {
        if (err) {
            res.status(400).send({message: err});
        } else {
            res.status(200).send({message: "User Logged Out"});
        }
    });
};

exports.saveReading = function (req, res) {
  // Init Variables
  var readingData = {user_id: mongoose.Types.ObjectId(req.session._id),
            question: req.body.question,
            cards: req.body.cards,
            rating: req.body.rating};

    var reading = new Reading(readingData);

  // Saves Reading to Database
    reading.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({message: "Reading Saved"});
        }
    });
};

exports.getUserReadings = function (req, res) {
  // Init Variables
    var user = req.session._id;

  // Finds Past Readings for Logged In User
    Reading.find({user_id: user}, function (err, result) {
        if (err) {
            res.status(400).send({message: err});
        } else {
            res.json(result);
        }
    });
};