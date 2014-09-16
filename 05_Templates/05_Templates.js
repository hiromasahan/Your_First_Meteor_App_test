if (Meteor.isClient) {
  
  Template.leaderboard.player = function(){
    return PlayersList.find();
     var player = ['David','Bob','Bill','Mary','Warren','Tim'];
    player.forEach(function(){
      document.write('test');
    });

  }
}