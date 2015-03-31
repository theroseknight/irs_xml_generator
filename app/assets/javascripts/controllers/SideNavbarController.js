IrsXmlGenerator.SideNavbarController = Ember.Controller.extend({
	needs:["homeVerification"],
	actions:{
		runVerification:function(){
			$("#verify-table-body").append("<tr><td>1</td><td>Create Elements from each file</td><td id='verify-1-a'>Working...</td><td id='verify-1-b'></td></tr>")
			spinner.showWorkingSpinner()
			$.ajax({
				url:"/verification/build_elements",
				method:"GET",
				success:function(data){
					$("#verify-1-a").text("Done - No Errors!")
					$("#verify-1-b").text(data.time)
					$("#verify-table-body").append("<tr><td>2</td><td>Ensure the file contains no new element types</td><td id='verify-2-a'>Working...</td><td id='verify-2-b'></td></tr>")
					$.ajax({
						url:"verification/no_new_elements",
						method:"GET",
						success:function(data){
							$("#verify-2-a").text("Done - No Errors!")
							$("#verify-2-b").text(data.time)
							$("#verify-table-body").append("<tr><td>3</td><td>Ensure the file contains no new attribute types</td><td id='verify-3-a'>Working...</td><td id='verify-3-b'></td></tr>")
							$.ajax({
								url:"verification/no_new_attributes",
								method:"GET",
								success:function(data){
									$("#verify-3-a").text("Done - No Errors!")
									$("#verify-3-b").text(data.time)
									spinner.hideWorkingSpinner()
								}
							})		
						}
					})					
				}
			})			
		}
	},
	homeView:true,
	verificationView:false,
	listView:false,
	builderView:false
})