angular.module('app.services')
  .factory('User', function($resource){
    return $resource('/api/users/:id', { id: '@_id' },{
      update:{ method: 'PUT' }
    },{ stripTrailingSlashes: false });
  })
  .factory('Invoice', function($resource){
    return $resource('/api/invoices/:id', { id: '@_id' },{
      update:{ method: 'PUT' }
    },{ stripTrailingSlashes: false });
  })
;
