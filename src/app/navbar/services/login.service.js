(function () {
    'use strict';

    angular
    .module('prisma')
    .service('LogInService', function ($resource) {
        var self = this;
        var loginObject = $resource('/api/login', null, {userLogin: {method: 'POST', isArray: false}});

        self.login = function (userEmail, userPassword) {
            return loginObject.userLogin(null, {email: userEmail, password: userPassword}).$promise;
        };

    });
})();