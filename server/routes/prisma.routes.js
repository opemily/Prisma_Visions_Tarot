'use strict';

// Prisma Routes
module.exports = function (app) {

  var prismaController = require('../controllers/prisma.controller');

    app.route('/api/getcards').get(prismaController.getCards);

    app.route('/api/signup').post(prismaController.signup);

    app.route('/api/login').post(prismaController.login);

    app.route('/api/logout').get(prismaController.logout);

    app.route('/api/savereading').post(prismaController.saveReading);

    app.route('/api/:user/readings/').get(prismaController.getUserReadings);

};