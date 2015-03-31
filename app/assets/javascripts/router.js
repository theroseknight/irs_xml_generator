// For more information see: http://emberjs.com/guides/routing/

IrsXmlGenerator.Router.map(function() {
  // this.resource('posts');
  this.resource("home",{path:"/"},function(){
  	this.route("verification")
  	this.route("list")
  	this.route("builder")
  })
});