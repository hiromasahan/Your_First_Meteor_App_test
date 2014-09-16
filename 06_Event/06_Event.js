if (Meteor.isClient) {
  
  Template.leaderboard.player = function(){
    return PlayerList.find();
    var player = [Davic, Bob, Mary, Warren, Tim];
    player.forEach(function(){
      document.write('player');
    });
  };

  Template.leaderboard.events({
    'click' : function(){
      console.log("You clicked something");
    }
  });
  Template.leaderboard.eventts({
    'click li':function(){
      console.log("You clicked a list item");
    }
  });
}