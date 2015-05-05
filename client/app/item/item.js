'use strict';

angular.module('dashboardAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/item/new', {
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      })
      .when('/item/:_id/edit', {
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      })
      .when('/item/:_id', {
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      });
  });