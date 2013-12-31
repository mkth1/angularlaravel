/*Mukesh 2013*/// create the module and name it contact
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
;var services = angular.module('contactServices',['ngResource']);

services.factory('Contacts', function  ($resource) {
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
});*/;function AppController($scope) {

	$scope.setActive = function (type) {
		
		$scope.home = '';
		$scope.about = '';

		$scope[type] = 'active';
	};
};function HomeController($scope,Contacts) {
	$scope.setActive('home');
	$scope.contacts = Contacts.query();

	$scope.master = {};

    $scope.save = function(contact) {
    	$scope.master = angular.copy(contact);
		Contacts.save($scope.master,function(res){
			console.log( "res", res );
			var msg = res.message;
			switch(res.success) {
				case true:
					toastr.info(msg);
					$scope.contact = null;
					$scope.contacts.push(contact);
				break;
				case false:
					angular.forEach(msg, function(value, key){
						toastr.error(value);
					});
				break;
				case 'stop':
					toastr.error(msg);
				break;
			}
		});
	}

	$scope.delete = function(contact){
		var contacts = $scope.contacts;
		var id = contact.id;
		contacts.splice(contacts.indexOf(contact)); 
		Contacts.delete({'id':id},function(res){
			var msg = res.message;
			switch(res.success) {
				case true:
					toastr.info(msg);
				break;
				case 'stop':
					toastr.error(msg);
				break;
			}
		});
		
	};

	$scope.edit = function(contact) {
		//$scope.contacts.pop(contact);
		$scope.contact = contact;	
		
	}

	$scope.update = function(contact) {
		
		$scope.master = angular.copy(contact);
		var id = contact.id;
		Contacts.update($scope.master, function(res) {
			console.log( "res", res );
			var msg = res.message;
			switch(res.success) {
				case true:
					toastr.info(msg);
					$scope.contact = null;
					$scope.contacts.push(contact);
				break;
				case false:
					angular.forEach(msg, function(value, key){
						toastr.error(value);
					});
				break;
				case 'stop':
					toastr.error(msg);
				break;
			}
		});
	}

	$scope.reset = function() {
		$scope.contact = angular.copy($scope.master);
	};

	$scope.reset();
}
