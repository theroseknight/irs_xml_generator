IrsXmlGenerator.HomeListRoute = Ember.Route.extend({
	actions: {
    didTransition: function() {
      var controller = this.controllerFor('sideNavbar');
			controller.set('homeView', false);
			controller.set('verificationView', false);
			controller.set('listView', true);
			controller.set('builderView', false);
    }
  }
})