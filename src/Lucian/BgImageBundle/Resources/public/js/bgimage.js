(function($) {
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
						       alert('Welcome ' + data.username + ' !');
//							window.location = data.target_path;
					       }
				       }
			       });

			return false;
		});
	});

	var runApp = function() {
		$.Model('Todo',{
		  findAll: 'GET /todos.json',
		  findOne: 'GET /todos/{id}.json',
		  create:  'POST /todos.json',
		  update:  'PUT /todos/{id}.json',
		  destroy: 'DELETE /todos/{id}.json'
		},{});
	}
}(jQuery));