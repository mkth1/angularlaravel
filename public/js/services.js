angular.module('contactServices', ['ngResource'])
	.factory('Contacts', function  ($resource) {
		return $resource('/contacts/:id',{},{
			update: {method:'PUT',params:{id:'@id'} }
		});
		
	});

/*
var services = angular.module('ngdemo.services', ['ngResource']);

services.factory('UsersFactory', function ($resource) {
    return $resource('/ngdemo/web/users', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('UserFactory', function ($resource) {
    return $resource('/ngdemo/web/users/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});*/