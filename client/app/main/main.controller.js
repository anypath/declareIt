'use strict';

angular.module('dashboardAppApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.items = [];

    $http.get('/api/items').success(function(items) {
      $scope.items = items;
      socket.syncUpdates('item', $scope.items);
    });

    $scope.addEvent = function() {
      if($scope.newEvent === '') {
        return;
      }
      // $http.post('/api/items', { name: $scope.newItem });
      $scope.newEvent = '';
    };

    $scope.deleteEvent = function(item) {
      $http.delete('/api/items/' + item._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('item');
    });
  });
