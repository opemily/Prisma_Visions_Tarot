(function () {
    'use strict';

    angular
    .module('prisma')
    .service('SetCookieService', function ($cookies, GetCookieService) {
        var self = this;

        self.setCookie = function (username, _id, options) {
            $cookies.putObject('user', {name: username, id: _id}, options);
            return {name: username, id: _id} 
        };
    });
})();