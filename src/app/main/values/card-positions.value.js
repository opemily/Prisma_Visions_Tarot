(function () {
  'use strict';

  angular
    .module('prisma')
    .value('CardPositions',
        [
            {position: 'The Outcome', meaning: 'This card suggests a possible action that can be taken to remedy the issue.'},
            {position: 'Past Influences', meaning: 'This card represents how past has influenced the subject of your query.'},
            {position: 'The Present', meaning: 'This card represents the subject you are seeking advice on.'},
            {position: 'The Future', meaning: 'This card offers insight into the future.'},
            {position: 'The Main Reason', meaning: 'This card relates to how the issue has come to pass.'}
        ]);
})();