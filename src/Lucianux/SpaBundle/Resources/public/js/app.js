'use strict';

/* App Module */

/* global angular */
var myloApp = angular.module('myloApp', ['ngRoute', 'myloControllers']);

myloApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/login', {
				templateUrl: 'bundles/lucianuxspa/templates/login.html',
				controller: 'LoginController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);
