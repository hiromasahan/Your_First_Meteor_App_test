PlayersList = new Meteor.Collection('players');

if (Meteor.isClient) {
  Template.leaderboard.player = function(){
      return PlayersList.find();
  }
  Template.leaderboard.events({
    'click li.player':function(){
       var playerId = this._id;
       Session.set('selectedPlayer',playerId);
       var selectedPlayer = Session.get('selectedPlayer');
       console.log(selectedPlayer);
      //里面单双引号均可以混合使用 里面加无意义的空格也会被忽略掉
      //一个template的round指的是横向空间而非纵向空间
    }
  });
  Template.leaderboard.selectedClass = function(){
    var selectedPlayer = Session.get('selectedPlayer');
    var playerId = this._id;
    if(selectedPlayer === playerId){
       return 'selected';
    }
  }
}

