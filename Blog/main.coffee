Posts = new Meteor.Collection "posts"
@Site = 2
@adminLoggedIn = () -> Meteor.user()?.emails?[0].address is "hiromasahan@163.com"
export a
