function HomeController($scope, Contacts) {
  $scope.setActive('home');
  $scope.contacts = Contacts.query();
  $scope.master = {};
  $scope.save = function (contact) {
    $scope.master = angular.copy(contact);
    Contacts.save($scope.master, function (res) {
      console.log('res', res);
      var msg = res.message;
      switch (res.success) {
      case true:
        toastr.info(msg);
        $scope.contact = null;
        $scope.contacts.push(contact);
        break;
      case false:
        angular.forEach(msg, function (value, key) {
          toastr.error(value);
        });
        break;
      case 'stop':
        toastr.error(msg);
        break;
      }
    });
  };
  $scope.delete = function (contact) {
    var contacts = $scope.contacts;
    var id = contact.id;
    contacts.splice(contacts.indexOf(contact));
    Contacts.delete({ 'id': id }, function (res) {
      var msg = res.message;
      switch (res.success) {
      case true:
        toastr.info(msg);
        break;
      case 'stop':
        toastr.error(msg);
        break;
      }
    });
  };
  $scope.edit = function (contact) {
    $scope.contact = contact;
  };
  $scope.update = function (contact) {
    $scope.master = angular.copy(contact);
    var id = contact.id;
    Contacts.update($scope.master, function (res) {
      console.log('res', res);
      var msg = res.message;
      switch (res.success) {
      case true:
        toastr.info(msg);
        $scope.contact = null;
        $scope.contacts.push(contact);
        break;
      case false:
        angular.forEach(msg, function (value, key) {
          toastr.error(value);
        });
        break;
      case 'stop':
        toastr.error(msg);
        break;
      }
    });
  };
  $scope.reset = function () {
    $scope.contact = angular.copy($scope.master);
  };
  $scope.reset();
}