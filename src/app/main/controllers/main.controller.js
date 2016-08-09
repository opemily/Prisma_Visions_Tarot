(function () {
    'use strict';

  angular
    .module('prisma')
    .controller('MainController', function (GetCardsService, CardPositions, $modal) {
        var self = this;

        GetCardsService.getCards().then(function (response) {
          self.tarotDeck = response.cards;
        });

        self.cardPosition = CardPositions;

        self.userRating = undefined;

        // Fisher Yates Function -> Service
        self.shuffle = function (array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        };
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

      self.shuffleDeck = function () {
        self.cardsShuffled = true;
        self.reading = [];
        self.shuffle(self.tarotDeck);

        for (var i = 0; i < self.cardPosition.length; i++){
          self.reading.push(self.tarotDeck[i]);
        }
      }
    });

})();
