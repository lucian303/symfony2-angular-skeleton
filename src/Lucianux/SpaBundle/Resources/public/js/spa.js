function LoginController($scope, $http) {
	'use strict';

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

		console.log(loginForm.attr('action'));

		$event.preventDefault();

		$http({
		    method: 'POST',
		    url: loginForm.attr('action'),
		    data: getInputs(loginForm),
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function (data, status, headers, config) {
			console.log(data);
			alert('yes!!!');
		}).error(function(data, status, headers, config) {
			console.log(data);
			alert('error');
        });
	};
}
