(function () {
    'use strict';

    angular
    .module('prisma')
    .controller('NavbarCtrl', function ($cookies, GetCookieService, $log, LogInService, LogOutService, RemoveCookieService, SetCookieService, $scope, User) {
        var self = this;

        self.user = GetCookieService.getCookie();

        // Login -> Service
        self.logIn = function () {
            LogInService.login(self.email, self.password).then(function (response) {
                self.user = SetCookieService.setCookie(response.firstName, response._id, response.cookie);
            }, function (error){
                $log.log(error);
            });
        };

        // Logout -> Service
        self.logOut = function () {
            LogOutService.logout().then(function () {
                self.user = RemoveCookieService.removeCookie();
            }, function(error){
                $log.log(error);
            });
        };


       $scope.$watch(function () { return self.user }, function(newVal, oldVal){
                User = newVal;
        }, true);

    });
})();
