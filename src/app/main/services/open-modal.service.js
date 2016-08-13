(function () {
    'use strict';

    angular
    .module('prisma')
    .service('OpenModalService', function ($modal) {
        var self = this;

        self.open = function (card) {
            var modalInstance = $modal.open({
                    animation: false,
                    templateUrl: 'app/main/partials/prisma-modal.partial.html',
                    controller: 'prismaModalCtrl as inst',
                    resolve: {
                      card: function () {return card;}
                    }
            });
        };

    });
})();