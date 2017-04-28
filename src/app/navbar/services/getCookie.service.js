(function () {
    'use strict';

    angular
    .module('prisma')
    .service('GetCookieService', function ($cookies, User) {
        var self = this;

        self.getCookie = function () {
            if ($cookies.get('user')) {
                User = JSON.parse($cookies.get('user'));
            } else {
                User = null;
            }

            return User;
        };
    });
})();