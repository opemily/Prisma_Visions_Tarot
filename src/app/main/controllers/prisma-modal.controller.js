(function () {
  'use strict';

    angular
    .module('prisma')
    .controller('prismaModalCtrl', function ($modalInstance, card) {
        var self = this;

        self.card = card;

        self.close = function () {
            $modalInstance.close();
        };

    });
})();