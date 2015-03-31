IrsXmlGenerator.HomeVerificationController = Ember.Controller.extend({
	needs:["sideNavbar"],
	actions:{
		someAction:function(){
			spinner.showUploadingSpinner()
		}
	},
})