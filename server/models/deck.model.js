'use strict';

// Module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Deck Schema
var deckSchema = new Schema({
    name: String,
    cssClass: String,
    img: String,
    def: String
});

var Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;