angular.module('invoiceoApp', ['ngMaterial', 'ui.router', 'ngResource', 'app.controllers'])
  .config(function($stateProvider){
    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .state('dashboard',{
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController'
      })
      .state('invoice', {
        url: '/invoices/:id',
        templateUrl: 'views/sales/invoice.html',
        controller: 'invoiceController'
      })
      .state('invoices', {
        url: '/invoices',
        templateUrl: 'views/sales/invoices.html',
        controller: 'invoicesController'
      })
    ;
  })
  .run(function($state, $rootScope, $mdSidenav) {
    $state.go('home');

    $rootScope.appSettings = {
      title: '',
      prev: false
    };

    $rootScope.setPage = function(page){
      $rootScope.appSettings = page;
      $mdSidenav('left').close();
    };
  })

  .controller('appController', function($scope, $mdSidenav){
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
    $scope.openRightMenu = function() {
      $mdSidenav('right').toggle();
    };
  })
;
