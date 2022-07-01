
$(document).ready(function () {





	$("#registration").validate({
		errorElement: "span",
		rules: {
			first_name: {
				required: true,
				minlength: 3
			},
			last_name: {
				required: true,
				minlength: 3
			},
			date_of_birth: {
				required: true,
			},
			gender: {
				
				required: true,
			},

			email: {
				required: true,
				
				email: true,



			},
			phone_number: {
				required: true,
			},
		
			checkbox: {
				required: true,
				


			},
		},
		messages: {
			first_name: {
				required: "Required firstname",
			},
			last_name: {
				required: "Required lastname",
			},
			gender: {
				required: "Required Gender",
			},
			email: {
				
				required: "Required Email",
				},
				phone_number: {
				
					required: "Required phone Number",
					},
				}
		  
			
		});
		// $("#submit").on('submit',function() {
		// 	alert("Form submitted Successfully");
		// });
		$("#submit").submit(function(e) {
		})

});

