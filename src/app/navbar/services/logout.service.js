(function () {
    'use strict';

    angular
    .module('prisma')
    .service('LogOutService', function ($resource) {
        var self = this;

        var logOutObject = $resource('/api/logout', null, {userLogout: {method: 'GET', isArray: false}});

        self.logout = function () {
            return logOutObject.userLogout().$promise;
        };

    });
})();