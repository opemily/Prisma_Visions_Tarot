'use strict';

// Prisma Routes
module.exports = function (app) {

  var prismaController = require('../controllers/prisma.controller');


    app.route('/').get(prismaController.getCards);

    app.route('/signup').put(prismaController.signup);

    app.route('/login').post(prismaController.login);

    app.route('/logout').get(prismaController.logout);


    app.route('/:id/readings').get(prismaController.getUserReadings);

    app.route('/savereading').put(prismaController.saveReading);

};