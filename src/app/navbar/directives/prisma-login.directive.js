(function () {
    'use strict';

    angular
    .module('prisma')
    .directive('prismaLogin', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/navbar/partials/prisma-login.partial.html',
            scope: false
        };

    });
})();