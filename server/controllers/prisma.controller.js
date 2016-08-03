'use strict';

// Module dependencies //

var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Deck = mongoose.model('Deck');
var Reading = mongoose.model('Reading');
var User = mongoose.model('User');



exports.getCards = function (req, res) {

  // Init Variables
    var name = req.session.firstName || false;


    // Gets Cards from Database to Program
    Deck.find({}, function (err, cards) {
        res.json({username: name, cards: cards});
    });

};

exports.signup = function (req, res) {
  // Init Variables
    var firstName = req.body.name;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;
    var passwordConfirmation = req.body.password_confirmation;

    // User Signs Up
    if (password === passwordConfirmation) {
        var encryptPassword = bcrypt.hashSync(req.body.password, 8);
        var user = new User({firstName: firstName, lastName: lastName, email: email, password: encryptPassword});
        user.save();
    }

    res.status(200).send({message: "OK"});
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
                req.session.name = user.name;
                req.session._id = user._id.toString();
                return res.status(200).send({message: "OK"});
            } else {
                return res.status(400).send({message: err});
            }
        });
    });
};

exports.logout = function (req, res) {
  // Ends Session
  req.session.destroy();
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
        console.log(err);
    });

};

exports.getUserReadings = function (req, res) {
  // Init Variables
    var user = req.session._id;

  // Finds Readings for that user
    Reading.find({user_id: user}, function (err, result) {
        if (err) {
            res.status(400).send({message: err});
        } else {
            res.json(result);
        }
    });
};

