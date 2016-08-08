(function () {
  'use strict';

  angular
    .module('prisma')
    .directive('prismaNavbar', prismaNavbar);

  /** @ngInject */
    function prismaNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/navbar/partials/navbar.partial.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    /** @ngInject */
    function NavbarController() {
    }


})();
