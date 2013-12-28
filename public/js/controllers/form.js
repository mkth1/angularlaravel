function FormController($scope) {

	$scope.master = {};

	$scope.save = function(contact) {
		$scope.master = angular.copy(contact);
		//console.log( "contact", $scope.master );
	};

	$scope.reset = function() {
		$scope.contact = angular.copy($scope.master);
	};

	$scope.reset();
}