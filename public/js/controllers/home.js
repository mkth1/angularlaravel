function HomeController($scope,Contacts) {
	$scope.setActive('home');
	$scope.contacts = Contacts.query();
}

