Post = new Meteor.Collection "posts"

adminLoggedIn = () ->Meteor.user()?.email?[0].address is "hiromasahan@163.com"

if Meteor.isServer
  Meteor.publish "posts",()->Posts.find()

  Meteor.methods
    post:(content, title, slug)->
      if adminLoggedIn()
        Posts.insert
          content: content
          title:   title
          slut:    slug
          createdOn: new Date

if Meteor.isClient
  ifViewing = (viewName)->Session.get('currentView') is viewName

  Template.header.adminLoggedIn = () -> adminLoggedIn()
    
  Template.header.events
    'click button': () -> Backbone.history.navigate '/new',true

  Template.newPostForm.show= () -> ifViewing   "newPostForm"

  Template.newPostForm.events
    'keyup #title':(e,t)->t.find(#"#slug").value = t.find("#title").value.toLowerCase().split(' ').join('-')
    'click button':(e,t)->
      slug=t.find("#slug").value

      Meteor.call"post",
        t.find("#content").value
        t.find("#title").value
        slug
        (err, id)->console.log id

  Template.post.show = () -> ifViewing("posts") or ifViewing("post")
  Template.posts.posts =()->
    if ifViewing "post"
      Posts.find slug: Session.get"currentPost"
    else
      Post.find(),{sort:{createdOn:-1}}



  Meteor.subscribe"posts"

  BlogRouter = Backbone.Router.extend
    routes:{
      "" : "main",
      "new" : "newPost"
      ":slug" : "post"
    },
    main:()->Session.set"currentView","posts"
    newPost:()->Session.set'currentView','newPostForm'
    post:(slug)->
      Session.set"currentView","post"
      Session.set"currentPost",slug



  Meteor.startup()->
    new BlogRouter
    Backbone.history.start pushState:true

