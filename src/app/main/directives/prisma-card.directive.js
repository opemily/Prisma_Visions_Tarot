(function () {
  'use strict';

  angular
    .module('prisma')
    .directive('prismaCard', function() {
      return {
        restrict: 'EA',
        templateUrl: 'app/main/partials/prisma-card.partial.html'
      };
    })

})();
