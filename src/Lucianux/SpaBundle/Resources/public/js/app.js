'use strict';

/* App Module */

/* global angular */
var myloApp = angular.module('myloApp', ['ngRoute', 'myloIndexControllers', 'myloSecurityControllers']);

myloApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'bundles/lucianuxspa/templates/index.html',
				controller: 'IndexController'
			}).
			when('/login', {
				templateUrl: 'bundles/lucianuxspa/templates/login.html',
				controller: 'LoginController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);
