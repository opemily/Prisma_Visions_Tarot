'use strict';

// Module dependencies

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Reading Schema
var readingSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    question: String,
    rating: Number,
    cards: Array
}, {
    timestamps: true
});

mongoose.model('Reading', readingSchema);