IrsXmlGenerator.HomeVerificationRoute = Ember.Route.extend({
	actions: {
    didTransition: function() {
      var controller = this.controllerFor('sideNavbar');
			controller.set('homeView', false);
			controller.set('verificationView', true);
			controller.set('listView', false);
			controller.set('builderView', false);
    }
  }
})