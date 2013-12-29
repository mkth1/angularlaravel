angular.module('contactServices', ['ngResource'])
	.factory('Contacts', function  ($resource) {
		return $resource('/contacts/:id');
		
	});
