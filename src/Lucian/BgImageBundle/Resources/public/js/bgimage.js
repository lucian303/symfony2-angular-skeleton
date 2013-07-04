(function($) {
	"use strict";

	var runApp = function($) {
		steal('jquery/model', function() {
			jQuery.Model('BgImage', {
				update: 'POST /bgimage'
			}, {});
		});
	};

	// Process login and start app once we've logged in
	$(function() {
		$('#login-form').submit(function(e) {
			e.preventDefault();

			var $this = $(e.currentTarget),
				inputs = {};

			// Send all form's inputs
			$.each($this.find('input'), function(i, item) {
				var $item = $(item);
				inputs[$item.attr('name')] = $item.val();
			});

			// Send form into ajax
			$.ajax({
				       url: $this.attr('action'),
				       type: 'POST',
				       dataType: 'json',
				       data: inputs,
				       success: function(data) {
					       if (data.has_error) {
						       // Insert your error process
						       alert('Error: ' + data.error);
					       }
					       else {
						       // Insert your success process
//						       alert('Welcome ' + data.username + ' !');
						       runApp($);
					       }
				       }
			       });

			return false;
		});
	});
}(jQuery));