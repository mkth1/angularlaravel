var services = angular.module('contactServices', ['ngResource']);
services.factory('Contacts', [
  '$resource',
  function ($resource) {
    return $resource('/contacts/:id', {}, {
      update: {
        method: 'PUT',
        params: { id: '@id' }
      }
    });
  }
]);