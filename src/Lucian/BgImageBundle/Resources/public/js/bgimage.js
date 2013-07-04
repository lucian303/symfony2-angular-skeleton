(function($) {
	"use strict";

	var getInputs = function(el) {
		var inputs = {};

		$.each(el.find('input'), function(i, item) {
			var $item = $(item);
			inputs[$item.attr('name')] = $item.val();
		});

		return inputs;
	};

	var runApp = function() {
		// Run single page app from here
	};

	// Process login and start app once we've logged in
	// This can be rewritten in your mvc fw of choice
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
					       runApp();
					   }
					}
				});

				return false;
			});
		});
	});
}(jQuery));
