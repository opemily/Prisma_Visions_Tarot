(function () {
    'use strict';

    angular
    .module('prisma')
    .service('RemoveCookieService', function ($cookies, User) {
        var self = this;

        self.removeCookie = function (){
            if($cookies.get('user')) {
                $cookies.remove('user');
                return null; 
            }
        };
        
    });
})();