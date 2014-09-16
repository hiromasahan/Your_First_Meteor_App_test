if (Meteor.isClient) {
  
  Template.leaderboard.player = function(){
    return PlayerList.find();
    player.forEach(function(){
      document.write('test');
    });
  };