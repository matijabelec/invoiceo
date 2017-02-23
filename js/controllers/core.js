angular.module('app.controllers', ['app.controllers.sales'])
  .controller('homeController', function($scope){
    $scope.message = 'Hello world!';
  })
  .controller('dashboardController', function($scope){
    $scope.message = 'Hello world!';
  })
  .controller('salesController', function($scope){
    $scope.message = 'Hello world!';
  })
;
