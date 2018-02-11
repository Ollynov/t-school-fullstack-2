
$(".form-signin").submit(function(event) {
	event.preventDefault();
	var ourData = {
		"name" : $('#inputName').val(),
		"email" : $('#inputEmail').val(),
		"password" : $('#inputPassword').val()
	}


	$.ajax({
		type: 'POST',
	  url: '/signup',
	  data: JSON.stringify(ourData),
	  contentType: 'application/json',
  	success: function() {
  		console.log('yay success')
  	}
	})
	.done(function(res) {
	  console.log("here is our client side response ", res);
	})
	.fail(function(err) {
	  console.log('Client side Error: ' + err.status);
	});

})
