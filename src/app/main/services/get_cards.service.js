(function () {
    'use strict';

    angular
    .module('prisma')
        .service('GetCardsService', function ($resource) {
            var self = this;
            var tarotDeck = $resource('/api/getcards');

            self.getCards = function () {  
              return tarotDeck.get('cards').$promise
            };
        });

})();