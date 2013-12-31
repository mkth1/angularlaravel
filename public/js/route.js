var contact = angular.module('contact', [
    'ngRoute',
    'contactServices'
  ]);
contact.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.php',
      controller: 'HomeController'
    });
  }
]);