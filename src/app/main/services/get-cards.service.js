(function () {
    'use strict';

    angular
    .module('prisma')
    .service('GetCardsService', function ($resource) {
        var self = this;
        var tarotDeck = $resource('/api/getcards', null, {getCards: {
            method: 'GET',
            isArray: false
            }
        });

        self.getCards = function () {
            return tarotDeck.getCards().$promise;
        };

    });
})();