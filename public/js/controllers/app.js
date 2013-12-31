function AppController($scope) {
  $scope.setActive = function (type) {
    $scope.home = '';
    $scope.about = '';
    $scope[type] = 'active';
  };
}