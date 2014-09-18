if (Meteor.isClient) {
  
  Template.leaderboard.player = function(){
    return PlayersList.find({});
  }
  
  Template.leaderboard.events({
    'click li.player': function () {
      var playerId = this.id;
      Session.set('selectedPlayer',playerId);
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    },

    'click #increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(
        {_id: selectedPlayer},
        {$set:{score : 5}}
        //{$inc:{score:5}} can also fulfill this
        );
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
