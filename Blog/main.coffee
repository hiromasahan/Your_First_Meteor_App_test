Posts = new Meteor.Collection "posts"

adminLoggedIn = () -> Meteor.user()?.emails?[0].address is "hiromasahan@163.com"