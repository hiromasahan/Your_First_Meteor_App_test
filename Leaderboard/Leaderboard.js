PlayersList = new Meteor.Collection('players');

if (Meteor.isClient) {
  Template.leaderboard.player = function(){
      return PlayersList.find({},{sort:{score:-1,name:1}});
  }
  Template.leaderboard.showSelectedPlayer = function(){
    var selectedPlayer=Session.get('selectedPlayer');
    return PlayersList.findOne(selectedPlayer);

  }
  Template.leaderboard.events({
    'click li.player':function(){
       var playerId = this._id;
       Session.set('selectedPlayer',playerId);
       var selectedPlayer = Session.get('selectedPlayer');
       console.log(selectedPlayer);
      //里面单双引号均可以混合使用 里面加无意义的空格也会被忽略掉
      //一个template的round指的是横向空间而非纵向空间
    },
    'click #increment':function(){
      var selectedPlayer=Session.get('selectedPlayer');
      PlayersList.update(
        {_id:selectedPlayer},
        {$inc:{score:5}}
        );
    },
    'click #decrement':function(){
      var selectedPlayer=Session.get('selectedPlayer');
      PlayersList.update(
        {_id:selectedPlayer},
        {$inc:{score:-5}}
        );
    },
    'click #remove':function(){
      var selectedPlayer=Session.get('selectedPlayer');
      PlayersList.remove(selectedPlayer);
    },
  });
  Template.leaderboard.selectedClass = function(){
    var selectedPlayer = Session.get('selectedPlayer');
    var playerId = this._id;
    if(selectedPlayer === playerId){
       return 'selected';
    }
  }
  Template.addPlayerForm.events({
    'submit form':function(theEvent,theTemplate){
      theEvent.preventDefault();
      var playerNameVar=theTemplate.find ('#playerName').value;
      PlayersList.insert({
        name:playerNameVar,
        score:0
      });
      console.log(playerNameVar);
      //如果一个template里有多个form，则’submit form＃idGoesHere‘:function(){        
      
    }
  });
}
/*if(Meteor.isServer){
  console.log(PlayersList.find().fetch());
  Meteor.subscribe('thePlayers',function(){
    var currentUserId = this.userId;
    return PlayersList.find({createdBy:currentUserId});
  });
}*/
