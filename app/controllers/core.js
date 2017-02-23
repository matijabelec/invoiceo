angular.module('app.controllers', ['app.controllers.sales'])
  .controller('homeController', function($scope, $rootScope){
    $rootScope.setPage({
      title: 'Home',
      prev: false
    });
  })
  .controller('dashboardController', function($scope, $rootScope){
    $rootScope.setPage({
      title: 'Dashboard',
      prev: false
    });
  })
;
