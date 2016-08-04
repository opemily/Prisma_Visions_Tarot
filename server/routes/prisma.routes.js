'use strict';

// Prisma Routes
module.exports = function (app) {

  var prismaController = require('../controllers/prisma.controller');


    app.route('/').get(prismaController.getCards);

    app.route('/signup').post(prismaController.signup);

    app.route('/login').post(prismaController.login);

    app.route('/logout').get(prismaController.logout);

    app.route('/savereading').post(prismaController.saveReading);

    app.route('/:user/readings').get(prismaController.getUserReadings);

};