(function($) {
	"use strict";

	var runApp = function() {
		var FileUploadView = Backbone.View.extend({
			tagName: "div",

			className: "app-content",

			events: {
				"click .upload": "upload"
			},

			initialize: function() {
				this.render();
			},

			render: function() {
				this.$el.html('<h2>hello</h2>');
				return this;
			}
		});

		var $bgImageUploadView = new FileUploadView({el: document.getElementById('app-content')});
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