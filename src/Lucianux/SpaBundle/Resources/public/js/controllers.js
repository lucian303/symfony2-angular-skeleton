'use strict';

/* Controllers */

/* global angular */
var myloControllers = angular.module('myloControllers', []);

myloControllers.controller('LoginController', ['$scope', '$http',
	function($scope) {
		/**
		 * Grabs a form's inputs into an object
		 *
		 * @private
		 * @param el formInput
		 * @returns string output
		 */
		var getInputs = function(el) {
			var inputs = {};

			$.each(el.find('input'), function(i, item) {
				var $item = $(item);
				inputs[$item.attr('name')] = $item.val();
			});

			return inputs;
		};

		/**
		 * Login action, triggered by a form submit event (usually)
		 *
		 * @param $event
		 */
		$scope.login = function($event) {
			var loginForm = $($event.target);

			$event.preventDefault();

			$.ajax({
				url: loginForm.attr('action'),
				type: 'POST',
				dataType: 'json',
				data: getInputs(loginForm),
				success: function(data) {
				   if (data.has_error) {
				       alert('Error: ' + data.error);
				   }
				   else {
					   alert('Welcome ' + data.username);
				   }
				}
			});
		};
	}
]);

