(function () {
    'use strict';

  angular
    .module('prisma')
    .controller('MainController', function (CardService) {
        var self = this;
  
      CardService.getCards().then(function onSuccess(response) {
      self.tarotDeck = response.cards;
    });;

        // Card Position -> Constant
        self.cardPostion = [
          {position: 'The Outcome', meaning: 'This card suggests a possible action that can be taken to remedy the issue.'}, 
          {position: 'Past Influences', meaning: 'This card represents how past has influenced the subject of your query.'}, 
          {position:'The Present', meaning: 'This card represents the subject you are seeking advice on.'},
          {position: 'The Future', meaning: 'This card offers insight into the future.'}, 
          {position: 'The Main Reason', meaning: 'This card relates to how the issue has come to pass.'}];

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
      self.cards = CardService.getCards();
      self.shuffleDeck = function () {
        console.log(self.tarotDeck)
      }
    });

})();
