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

	var renderView = function(id) {
		var formId = id + '-form';
		var fileId = id + '-file';
		$('#app-content').html(
			Mustache.render(
				'<form enctype="multipart/form-data" id="{{ formId }}" action="/bgImage" method="POST"><input type="file" name="bgImageFile" id="{{ fileId }}"/><input type="button" id="{{ id }}" value="Upload Background"/></form>',
				{
					id: id,
					formId: formId,
					fileId: fileId
				}
			)
		);
	};

	var setEvents = function(id) {
		$('#' + id).click(function() {
			var theform = $('#' + id + '-form');
			var formData = new FormData(theform[0]);

			$.ajax({
				url: theform.attr('action'),
				type: 'POST',
				contentType: false,
				cache: false,
				processData: false,
				data: formData,
				success: function(model) {
					console.log(model);
				},
				error: function() {
					alert('There was an error uploading the file.');
				}
			});
		});
	};

	var runApp = function() {
		var viewId = 'file-upload';
		renderView(viewId);
		setEvents(viewId);
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
					       runApp();
					   }
					}
				});

				return false;
			});
		});
	});
}(jQuery));