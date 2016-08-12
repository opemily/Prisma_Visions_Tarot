
(function () {
    'use strict';

      angular
        .module('prisma')
        .controller('MainController', function (GetCardsService, CardPositions, FisherYatesShuffle, ShuffleDeckService, $modal, $scope) {
            var self = this;

            self.cardPosition = CardPositions;

            self.userRating = undefined;

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

            // I want to put this into a service but it does not work... how do I do it?

            // GetCardsService.getCards().then(function (response) {
            //   self.tarotDeck = response.cards;
            // });

            $scope.shuffleDeck = ShuffleDeckService.shuffleDeck();

            // self.shuffleDeck = function () {
            //     self.cardsShuffled = true;
            //     self.reading = [];
            //     FisherYatesShuffle.shuffle(self.tarotDeck);

            //     for (var i = 0; i < 5; i++){
            //       self.reading.push(self.tarotDeck[i]);
            //     }
            // }
    });
})();
