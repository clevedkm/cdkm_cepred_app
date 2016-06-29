angular.module('plunker', ['ui.bootstrap'])
  .controller('contentCtrl', function ($scope) {

    $scope.friends = [
      {'name':'Jack'},
      {'name':'Tim'},
      {'name':'Stuart'},
      {'name':'Richard'},
      {'name':'Tom'},
      {'name':'Frank'},
      {'name':'Ted'},
      {'name':'Michael'},
      {'name':'Albert'},
      {'name':'Tobby'},
      {'name':'Mick'},
      {'name':'Nicholas'},
      {'name':'Jesse'},
      {'name':'Lex'},
      {'name':'Robbie'},
      {'name':'Jake'},
      {'name':'Levi'},
      {'name':'Edward'},
      {'name':'Neil'},
      {'name':'Hugh'},
      {'name':'Hugo'},
      {'name':'Yanick'},
      {'name':'Matt'},
      {'name':'Andrew'},
      {'name':'Charles'},
      {'name':'Oliver'},
      {'name':'Robin'},
      {'name':'Harry'},
      {'name':'James'},
      {'name':'Kelvin'},
      {'name':'David'},
      {'name':'Paul'}
    ];


    app.controller('contentCtrl', function ($scope, friendsFactory) {
      $scope.friends = friendsFactory.query();

      $scope.itemsPerPage = 10
      $scope.currentPage = 1;

      // $scope.maxSize = 5;
      // $scope.bigTotalItems = 175;
      // $scope.bigCurrentPage = 1;

      $scope.pageCount = function () {
        return Math.ceil($scope.friends.length / $scope.itemsPerPage);
      };

      $scope.friends.$promise.then(function () {
        $scope.totalItems = $scope.friends.length;
        $scope.$watch('currentPage + itemsPerPage', function() {
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;

          $scope.filteredFriends = $scope.friends.slice(begin, end);
        });
      });
    });


//    $scope.totalItems = 64;
//    $scope.itemsPerPage = 10
//    $scope.currentPage = 1;
//
//    $scope.setPage = function (pageNo) {
//      $scope.currentPage = pageNo;
//    };
//
//    $scope.pageChanged = function() {
//      console.log('Page changed to: ' + $scope.currentPage);
//    };
//
//    $scope.maxSize = 5;
//    $scope.bigTotalItems = 175;
//    $scope.bigCurrentPage = 1;
  });