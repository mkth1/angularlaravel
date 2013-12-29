function FormController($scope,Contacts) {

	$scope.master = {};


 	$scope.save = function (contact) {
        Contacts.save( function(contact){
            $scope.contact = null;
            $scope.contacts.push(contact);
        
        });
    };

    //$scope.contacts = Contacts.query();


	/*$scope.save = function(contact) {
		$scope.master = angular.copy(contact);
		//$scope.contacts.push(contact);
		/*Contacts.save(function(contact){

		});
		Contacts.save($scope.reserve,function(data){
			//$scope.contact.origin = '';
			//$scope.contact.destination = '';

			$scope.contacts.push(data);
			console.log( "contacts", $scope.contacts );
		});
		
		
	};
	*/
	$scope.reset = function() {
		$scope.contact = angular.copy($scope.master);
	};

	$scope.reset();

	/*$scope.reserveFlight = function() {
		Reservations.save($scope.reserve,function(data){
			$scope.reserve.origin = '';
			$scope.reserve.destination = '';

			$scope.reservations.push(data);
		});
	}*/

}