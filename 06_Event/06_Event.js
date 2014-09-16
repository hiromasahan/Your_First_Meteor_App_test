//client only code

Template.leaderboard.players = function () {
  return Players.find({}, {sort: {score: -1, name: 1}});
};

Template.leaderboard.selectedName = function () {
  var player = Players.findOne(Session.get("selectedPlayer"));
  return player && player.name;
};

Template.player.selected = function () {
  return Session.equals("selectedPlayer", this._id) ? "selected" : '';
};

Template.leaderboard.events({
  'click input.inc': function () {
    Players.update(Session.get("selectedPlayer"), {$inc: {score: 5}});
  }
});

Template.player.events({
  'click': function () {
    Session.set("selectedPlayer", this._id);
  }
});

//server only code

Meteor.startup(function () {
  if (Players.find().count() === 0) {
    var names = ["Ada Lovelace",
                 "Grace Hopper",
                 "Marie Curie",
                 "Carl Friedrich Gauss",
                 "Nikola Tesla",
                 "Claude Shannon"];
    for (var i = 0; i < names.length; i++)
      Players.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
  }
});