var app = angular.module('servicesWorkshop', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/messages.html',
			controller: 'MessagesController'
		})
		.when('/new', {
			templateUrl:'templates/new_message.html',
			controller: 'PostMessageController'
		})
		.otherwise({
			redirectTo:'/'
		})
		$locationProvider.html5Mode(true);
})
