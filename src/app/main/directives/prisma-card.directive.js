(function () {
  'use strict';

  angular
    .module('prisma')
    .directive('prismaCard', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/main/partials/prisma-card.partial.html',
        scope: 'false'
      };
    })

})();
