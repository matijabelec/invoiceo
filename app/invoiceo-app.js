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
        .when('/invoices',{
            templateUrl: './views/sales/invoices.html',
            controller: 'salesController'
        })
        .when('/invoices/:id',{
            templateUrl: './views/sales/invoice.html',
            controller: 'salesController'
        })
        .otherwise({ redirectTo: '/' });
  })
  .run(function ($rootScope){
      //$rootScope.page = '';
  })
  .controller('sideNavController', function($scope, $mdSidenav){
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
    $scope.openRightMenu = function() {
      $mdSidenav('right').toggle();
    };
  })
;
