(function () {
    'use strict';

    angular
    .module('prisma')
    .controller('MainController', function (CardPositions, ShuffleDeckService, OpenModalService, User) {
            var self = this;

            self.cardPosition = CardPositions;

            self.userRating = undefined;

            self.open = function (card) {
                OpenModalService.open(card);
            };

            self.shuffleDeck = function () {
                self.cardsShuffled = true;
                self.reading = ShuffleDeckService.shuffleDeck();
            };

            console.log(User);

    });
})();
