angular.module('app.controllers.sales', [])
  .controller('invoicesController', function($scope, $http, $mdDialog){
    $scope.invoices = [];
    $scope.page = 1;

    $scope.reloadPage = function(page){
      page = page || $scope.page;
      $http.get('./api/invoices/' + page + '.json')
        .then(function(success){
          $scope.page = page;
          $scope.invoices = success.data.records;
        }, function(error){
          alert('Error on data fetch for invoices.');
        });
    };

    $scope.prevPage = function(){
      $scope.reloadPage($scope.page-1);
    };

    $scope.nextPage = function(){
      $scope.reloadPage($scope.page+1);
    };

    $scope.showConfirm = function(event) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure to delete the record?')
        .textContent('Record will be deleted permanently.')
        .ariaLabel('Invoiceo')
        .targetEvent(event)
        .ok('Yes')
        .cancel('No');

      $mdDialog.show(confirm)
        .then(function(){
          $scope.status = 'Record deleted successfully!';
        }, function(){
          $scope.status = 'You decided to keep your record.';
        });
    };

    $scope.reloadPage();
  })
;
