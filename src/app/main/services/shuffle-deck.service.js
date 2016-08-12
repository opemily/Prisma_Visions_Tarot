
'use strict';

angular
.module('prisma')
.service('ShuffleDeckService', function (GetCardsService, FisherYatesShuffle) {
    var self = this;

    var shuffleTheDeck = function () {
                self.deckShuffled = true;
                self.reading = [];

                FisherYatesShuffle.shuffle(self.tarotDeck);
                    for (var i = 0; i < 5; i++) {
                        self.reading.push(self.tarotDeck[i]);
                    }

                console.log(self.reading);
               
        };

     
    self.shuffleDeck = function () {
            GetCardsService.getCards().then(function (response) {
            self.tarotDeck = response.cards;
            return shuffleTheDeck();  
        });
    };

               
});
