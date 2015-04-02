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
					$("#verify-1-a").text("No Errors!")
					$("#verify-1-b").text(data.time)
					$("#verify-table-body").append("<tr><td>2</td><td>No new element types</td><td id='verify-2-a'>Working...</td><td id='verify-2-b'></td></tr>")
					$.ajax({
						url:"verification/no_new_elements",
						method:"GET",
						success:function(data){
							$("#verify-2-a").text("No Errors!")
							$("#verify-2-b").text(data.time)
							$("#verify-table-body").append("<tr><td>3</td><td>No new attribute types</td><td id='verify-3-a'>Working...</td><td id='verify-3-b'></td></tr>")
							$.ajax({
								url:"verification/no_new_attributes",
								method:"GET",
								success:function(data){
									$("#verify-3-a").text("No Errors!")
									$("#verify-3-b").text(data.time)
									$("#verify-table-body").append("<tr><td>4</td><td>No new required attribute relationships</td><td id='verify-4-a'>Working...</td><td id='verify-4-b'></td></tr>")
									$.ajax({
										url:"verification/no_new_required_attributes",
										method:"GET",
										success:function(data){
											$("#verify-4-a").text("No Errors!")
											$("#verify-4-b").text(data.time)
											$("#verify-table-body").append("<tr><td>5</td><td>All required attributes are present</td><td id='verify-5-a'>Working...</td><td id='verify-5-b'></td></tr>")
											$.ajax({
												url:"verification/all_required_attributes",
												method:"GET",
												success:function(data){
													$("#verify-5-a").text("No Errors!")
													$("#verify-5-b").text(data.time)
													$("#verify-table-body").append("<tr><td>6</td><td>No new required closing tags</td><td id='verify-6-a'>Working...</td><td id='verify-6-b'></td></tr>")
													$.ajax({
														url:"verification/no_new_closing_tags",
														method:"GET",
														success:function(data){
															$("#verify-6-a").text("No Errors!")
															$("#verify-6-b").text(data.time)
															$("#verify-table-body").append("<tr><td>7</td><td>All required closing tags are present</td><td id='verify-7-a'>Working...</td><td id='verify-7-b'></td></tr>")
															$.ajax({
																url:"verification/all_required_closing_tags",
																method:"GET",
																success:function(data){
																	$("#verify-7-a").text("No Errors!")
																	$("#verify-7-b").text(data.time)
																	$("#verify-table-body").append("<tr><td>8</td><td>All never closing tags are present</td><td id='verify-8-a'>Working...</td><td id='verify-8-b'></td></tr>")
																	$.ajax({
																		url:"verification/all_never_closing_tags",
																		method:"GET",
																		success:function(data){
																			$("#verify-8-a").text("No Errors!")
																			$("#verify-8-b").text(data.time)
																			$("#verify-table-body").append("<tr><td>9</td><td>No new child relationships</td><td id='verify-9-a'>Working...</td><td id='verify-9-b'></td></tr>")
																			$.ajax({
																				url:"verification/no_new_child_relationships",
																				method:"GET",
																				success:function(data){
																					$("#verify-9-a").text("No Errors!")
																					$("#verify-9-b").text(data.time)
																					$("#verify-table-body").append("<tr><td>10</td><td>No new required child relationships</td><td id='verify-10-a'>Working...</td><td id='verify-10-b'></td></tr>")
																					$.ajax({
																						url:"verification/no_new_required_child_relationships",
																						method:"GET",
																						success:function(data){
																							$("#verify-10-a").text("No Errors!")
																							$("#verify-10-b").text(data.time)
																							$("#verify-table-body").append("<tr><td>11</td><td>All required child relationships are present</td><td id='verify-11-a'>Working...</td><td id='verify-11-b'></td></tr>")
																							$.ajax({
																								url:"verification/all_required_child_relationships",
																								method:"GET",
																								success:function(data){
																									$("#verify-11-a").text("No Errors!")
																									$("#verify-11-b").text(data.time)
																									spinner.hideWorkingSpinner()
																									$("#verify-table-body").append("<tr><td></td><td>All validations have passed! Return home.</td></tr>")
																								}
																							})
																						}
																					})
																				}
																			})
																		}
																	})
																}
															})
														}
													})
												}
											})
										}
									})
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