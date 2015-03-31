IrsXmlGenerator.HomeRoute = Ember.Route.extend({
	actions: {
    didTransition: function() {
      var controller = this.controllerFor('sideNavbar');
			controller.set('homeView', true);
			controller.set('verificationView', false);
			controller.set('listView', false);
			controller.set('builderView', false);
    }
  }
})