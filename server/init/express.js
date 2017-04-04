'use strict';

var bcrypt      = require('bcrypt');
var bodyParser  = require('body-parser');
var express     = require('express');
var fs          = require('fs');
var mongoose    = require('mongoose');
var session     = require('express-session');
var MongoStore  = require('connect-mongo')(session);

module.exports = function (db) {
    var app = express();
    app.use(bodyParser.json());

    // Load in Database models
    require('../models/deck.model');
    require('../models/reading.model');
    require('../models/user.model');

    app.use(express.static('./dist'));

    // Sessions
    var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/prisma';
    app.use(session({
        secret: 'Hello World',
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({url: mongoUrl}),  
    }));


    // Load in Route handlers
    require('../routes/prisma.routes')(app);

    return app;
};