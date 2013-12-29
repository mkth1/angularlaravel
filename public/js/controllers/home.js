function HomeController($scope,Contacts) {
	$scope.setActive('home');
	$scope.contacts = Contacts.query();

	$scope.master = {};

    $scope.save = function(contact) {
    	$scope.master = angular.copy(contact);
		Contacts.save($scope.master,function(res){
			console.log( "res", res );
			if ( typeof res.errors == "undefined") {
				toastr.info(res.message);
				$scope.contact = null;
				$scope.contacts.push(contact);

			} else {
				angular.forEach(res.errors, function(value, key){
					toastr.error(value);
				});
			}
		});
	}

	$scope.delete = function(contact){
		var contacts = $scope.contacts;
		var id = contact.id;
		contacts.splice(contacts.indexOf(contact)); 
		Contacts.delete({'id':id},function(res){
			toastr.info(res.message);
		});
		
	};

	$scope.reset = function() {
		$scope.contact = angular.copy($scope.master);
	};

	$scope.reset();
}
