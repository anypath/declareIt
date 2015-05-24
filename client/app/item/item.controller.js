'use strict';

angular.module('dashboardAppApp')
  .controller('ItemCtrl', function ($scope, $http, $routeParams, $location, $log, socket, $window) {
    $scope.item = {};

    var _id = $routeParams._id;

    if ($location.path() == '/item/new' || $location.path() == '/item/new/') {
      $scope.to_create = true;
    } else {
      $http.get('/api/items/' + _id).success(function(item) {
        $scope.item = item;
        $scope.item.imgInfo = JSON.stringify(item.imgInfo,null,"    ")
        $scope.item.cryptInfo = JSON.stringify(item.cryptInfo,null,"    ")
        $scope.item.entryInfo = JSON.stringify(item.entryInfo,null,"    ")
        $scope.item.repInfo = JSON.stringify(item.repInfo,null,"    ")
        socket.syncUpdates('item', $scope.item);
      });
    }

    $scope.addItem = function() {
      console.warn($scope.item)
      $http.post('/api/items', $scope.item );
    };

    $scope.updateItem = function() {
      $http.put('/api/items/' + _id, $scope.item );
    };

    // $scope.deleteItem = function(item) {
    //   $http.delete('/api/items/' + item._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('item');
    // });

  });
