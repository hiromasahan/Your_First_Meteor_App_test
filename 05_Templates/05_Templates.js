if (Meteor.isClient) {
  
  Template.leaderboard.player = function(){
    return PlayerList.find();
     var player = ['David','Bob','Bill','Mary','Warren','Tim'];
    player.forEach(function(){
      document.write('test');
    });

  }
}