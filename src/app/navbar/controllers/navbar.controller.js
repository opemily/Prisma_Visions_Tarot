(function () {
  'use strict';

  angular
    .module('prisma')
    .controller('NavbarCtrl', function (LogInService, LogOutService) {
        var self = this;

        // Login -> Service
        self.logIn = function () {
            LogInService.login(self.email, self.password).then(function (response) {
                self.firstName = response.firstName;
                self.loggedIn = true;
              });
        };

        // Logout -> Service
        self.logOut = function () {
            LogOutService.logout().then(function () {
                self.loggedIn = false;
            });
        };

    });
})();
