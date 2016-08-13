(function () {
    'use strict';

    angular
    .module('prisma')
    .service('ShuffleDeckService', function (GetCardsService, FisherYatesShuffle) {
        var self = this;

        self.shuffleDeck = function() {
                var reading = [];
                
                GetCardsService.getCards().then(function (response) {
                    var tarotDeck = response.cards;
                    FisherYatesShuffle.shuffle(tarotDeck);
                    for (var i = 0; i < 5; i++) {
                        reading.push(tarotDeck[i]);
                    }
                });

                return reading;
        };

    });
})();