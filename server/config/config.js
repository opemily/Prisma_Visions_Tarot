'use strict';

module.exports = {
  db: {
    uri: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/prisma',
    options: {
      user: '',
      pass: ''
    }
  }
};
