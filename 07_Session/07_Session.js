if (Meteor.isClient) {
  
  Template.leaderboard.events({
    'click li.player':function(){
    Session.set('selectedPlayer','session value test');
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