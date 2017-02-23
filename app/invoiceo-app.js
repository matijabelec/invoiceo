angular.module('invoiceoApp', ['ngMaterial', 'ngRoute', 'app.controllers'])
  .config(function($routeProvider){
      $routeProvider
        .when('/',{
            templateUrl: './views/home.html',
            controller: 'homeController'
        })
        .when('/dashboard',{
            templateUrl: './views/dashboard.html',
            controller: 'dashboardController'
        })
        .when('/invoices/:id',{
            templateUrl: './views/sales/invoice.html',
            controller: 'invoiceController'
        })
        .when('/invoices',{
            templateUrl: './views/sales/invoices.html',
            controller: 'invoicesController'
        })
        .otherwise({ redirectTo: '/' });
  })
  .run(function ($rootScope, $mdSidenav){
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
