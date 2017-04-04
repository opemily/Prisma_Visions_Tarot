(function () {
    'use strict';

    angular
    .module('prisma')
    .controller('NavbarCtrl', function ($cookies, $log, LogInService, LogOutService) {
        var self = this;

        self.setCookie = function (name, id, options) {
            $cookies.put('name', name, options);
            $cookies.put('id', id, options);
        };

        self.getCookie = function () {
             if ($cookies.get('name')) {
                self.loggedIn = true;
                self.name = $cookies.get('name');
                self.id = $cookies.get('id');
  
            } else {
                self.loggedIn = false;
            }
        }

        self.removeCookie = function (){
            if($cookies.get('name')) {
                $cookies.remove('name');
                $cookies.remove('id');
                self.loggedIn = false; 
            }
        }

        // Login -> Service
        self.logIn = function () {
            LogInService.login(self.email, self.password).then(function (response) {

                self.name = response.firstName;
                self.id = response._id;
                self.setCookie(self.name, self.id, response.cookie);
                self.loggedIn = true;
            }, function(error){
                $log.log(error);
            });
        };


        // Logout -> Service
        self.logOut = function () {
            LogOutService.logout().then(function () {
                self.removeCookie();
            }, function(error){
                $log.log(error);
            });
        };

        self.getCookie();

    });
})();
