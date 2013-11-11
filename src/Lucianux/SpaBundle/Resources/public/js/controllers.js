'use strict';

/* Controllers */

/* global angular */
var myloControllers = angular.module('myloControllers', []);

myloControllers.controller('IndexController', ['$scope',
	function($scope) {

	}
]);

myloControllers.controller('LoginController', ['$scope', '$http',
	function($scope, $http) {
		this.username = '';
		this.password = '';
		this.url = '/api/v1/login_check';

		/**
		 * Grabs a form's inputs into an object
		 *
		 * @private
		 * @param el formInput
		 * @return {{}} output
		 *
		 * @todo make this into a service, or better, yet use angular forms
		 */
		var getInputs = function(el) {
			var inputs = {};

			jQuery.each(el.find('input'), function(i, item) {
				var $item = $(item);
				inputs[$item.attr('name')] = $item.val();
			});

			return inputs;
		};

		/**
		 * Login action, triggered by a form submit event (usually)
		 *
		 * @param $event Form submittal event
		 *
		 * @todo refactor out jquery, use $http
		 */
		this.loginUser = function loginUser($event) {
			console.log(this.username, this.password);
			var loginForm = $($event.target);

			$event.preventDefault();

			jQuery.ajax({
				url: loginForm.attr('action'),
				type: 'POST',
				dataType: 'json',
				data: getInputs(loginForm),
				success: function($data) {
				   if ($data.has_error) {
				       alert('Error: ' + $data.error);
				   }
				   else {
					   alert('Welcome ' + $data.username);
				   }
				}
			});
		};
	}
]);
