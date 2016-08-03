'use strict';

// 
/*
ToDo Routes:

All Requests need to specify a content type of 'application/json'

*/
module.exports = function(app) {
  
  var prismaController = require('../controllers/prisma.controller');


  app.route('/').get(primsaController.getCards);

  app.route('/signup').put(prismaController.signup);

  app.route('/login').post(prismaController.login);

  app.route('/logout').get(primsaController.logout);


  app.route('/:id/readings').get(todoController.getUserReadings);

  app.route('/savereading').put(todoController.saveReading);

};