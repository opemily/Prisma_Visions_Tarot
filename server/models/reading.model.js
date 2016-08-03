'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'), 
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var readingSchema = new Schema({
   user_id: {type: Schema.Types.ObjectId, ref: 'User'},
   question: String,
   cards: Array,
   rating: String
});

mongoose.model('Reading', readingSchema);