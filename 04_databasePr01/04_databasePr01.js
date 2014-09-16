new Meteor.Collection('players');
PlayersList = new Meteor.Collection('players');

if (Meteor.isClient){
  console.log("Hello client")
}
if (Meteor.isServer){
  console.log("Hello server")
}
