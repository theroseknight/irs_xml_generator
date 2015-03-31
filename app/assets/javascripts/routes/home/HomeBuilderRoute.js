IrsXmlGenerator.HomeBuilderRoute = Ember.Route.extend({
	actions: {
    didTransition: function() {
      var controller = this.controllerFor('sideNavbar');
			controller.set('homeView', false);
			controller.set('verificationView', false);
			controller.set('listView', false);
			controller.set('builderView', true);
    }
  }
})