(function () {
  'use strict';

  angular
    .module('prisma')
    .directive('prismaNavbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/navbar/partials/navbar.partial.html',
            controller: 'NavbarCtrl',
            controllerAs: 'nav',
            bindToController: true
        };
    });


})();
