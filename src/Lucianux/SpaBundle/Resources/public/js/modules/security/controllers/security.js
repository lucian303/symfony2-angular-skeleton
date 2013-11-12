'use strict';

/* global angular */
var myloSecurityControllers = angular.module('myloSecurityControllers', []);

myloSecurityControllers.controller('LoginController', ['$http',
	function($http) {
		this.username = '';
		this.password = '';
		this.url = '/api/v1/login_check';
		this.apikey = '';

		/**
		 * @param $event Form submittal event
		 * @todo refactor out jquery, use $http
		 */
		this.loginUser = function loginUser($event) {
			var loginData = {};

			loginData._username = this.username;
			loginData._password = this.password;

			$event.preventDefault();

			// This is not ideal, as we still get redirected (we don't with jQuery)
			// The request is different for some reason. We can use this to our advantage,
			// however and return full JSON data back with a key to use for subequent requests
			$http({
			    method: 'POST',
			    url: this.url,
			    data: jQuery.param(loginData),
			    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(function (data) {
				alert('Welcome ' + data.content.username);
			}).error(function(data) {
				alert('Could not log you in.');
	        });
		};
	}
]);
