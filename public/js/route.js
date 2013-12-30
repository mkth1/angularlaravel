// create the module and name it contact
var contact = angular.module('contact', ['ngRoute','contactServices']);

// configure our routes
contact.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'partials/home.php',
			controller: "HomeController"
		});
});
