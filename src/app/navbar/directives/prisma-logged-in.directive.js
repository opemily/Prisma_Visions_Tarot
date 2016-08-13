(function () {
  'use strict';

  angular
    .module('prisma')
    .directive('prismaLoggedIn', function () {
      return {
        restrict: 'E',
        templateUrl: 'app/navbar/partials/prisma-logged-in.partial.html',
        scope: false
      };

    });
})();