(function($) {
	"use strict";

	var renderView = function(id) {
		var buttonId = id + '-submit';

		$('#app-content').html(
			Mustache.render('<input type="file" name="file" id="{{ id }}"/><input type="button" id="{{ buttonId }}" value="Upload Background"/>',
				{
					id: id,
					buttonId: buttonId
				})
		);

	}

	var runApp = function() {
		renderView('file-upload');

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
}(jQuery));