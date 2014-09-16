if (Meteor.isClient) {
  
  Template.leaderboard.events({
    'click li.player':function(){
      var playerId = this.id;
      Session.set('selectedPlayer',playerId);
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
   }
 });


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
}