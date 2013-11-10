(function($) {
	"use strict";

	var app = {};
	app.run = function() {

	};

	// Process login and start app once we've logged in
	$(document).ready(function() {
		$(function() {
			$('#login-form').submit(function(e) {
				e.preventDefault();

				var el = $(e.currentTarget);

				$.ajax({
			       url: el.attr('action'),
			       type: 'POST',
			       dataType: 'json',
			       data: getInputs(el),
			       success: function(data) {
				       if (data.has_error) {
					       alert('Error: ' + data.error);
				       }
				       else {
					       app.run();
				       }
			       }
		       });

				return false;
			});
		});
	});
}(jQuery));