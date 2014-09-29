ifViewing = (viewName)->Session.get('currentView') is viewName

Template.header.adminLoggedIn= () ->adminLoggedIn()
Template.header.events
  'click button':()->Backbone.history.navigate '/new',true

Template.newPostForm.show=()->ifViewing"newPostForm"
Template.newPostForm.events
  'keyup #title'
  'click button':(e,t)->t.find("#slug").value=t.find("#title").value.toLowerCase().spilt(' ').join('-')
    slug=t.find("#slug").value

    Meteor.call"post",
    t.find("#content").value
    t.find("#title").value
    slug
    (err, id)->console.log id

Template.post.show = ()->ifViewing("posts") or ifViewing("post")
Template.posts.posts =()->
  if ifViewing "post"
    Posts.find slug: Session.get"currentPost"
  else
    Post.find(),{sort:{createdOn:-1}}
