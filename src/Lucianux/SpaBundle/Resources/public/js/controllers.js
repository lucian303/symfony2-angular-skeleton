'use strict';

/* Controllers */

var myloControllers = angular.module('myloControllers', []);

myloControllers.controller('LoginController', ['$scope', '$http',
	function($scope, $http) {
		/**
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
				       console.log(data);
					   alert('Welcome ' + data.username);
				   }
				}
			});
		};
	}
]);

//		$http({
//		    method: 'POST',
//		    url: loginForm.attr('action'),
//		    data: getInputs(loginForm),
//		    headers: {'Content-Type': 'application/json'}
//		}).success(function (data, status, headers, config) {
//			console.log(status, headers, config);
//			alert('yes!!!');
//		}).error(function(data, status, headers, config) {
//			alert('error');
//        });
