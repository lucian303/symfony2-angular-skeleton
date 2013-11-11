'use strict';

/* Controllers */

/* global angular */
var myloControllers = angular.module('myloControllers', []);

myloControllers.controller('IndexController', ['$scope',
	function($scope) {	}
]);

myloControllers.controller('LoginController', ['$http',
	function($http) {
		this.username = '';
		this.password = '';
		this.url = '/api/v1/login_check';

		/**
		 * @param $event Form submittal event
		 * @todo refactor out jquery, use $http
		 */
		this.loginUser = function loginUser($event) {
			var loginData = {};

			loginData._username = this.username;
			loginData._password = this.password;

			$event.preventDefault();

			jQuery.ajax({
				url: this.url,
				type: 'POST',
				dataType: 'json',
				data: loginData,
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
