(function () {
'use strict';

angular.module('prisma')
  .controller('NavbarCtrl', function (LoginService) {
    var self = this;


    self.LogIn = function () {
        LoginService.login(self.email, self.password).then(function (response) {
            console.log(response);
          }
        );
    };
  });

})();
