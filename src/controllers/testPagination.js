todos.controller("TodoController", function($scope) {
   $scope.filteredTodos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;

  $scope.makeTodos = function() {
    $scope.todos = [];
    for (i=1;i<=1000;i++) {
      $scope.todos.push({ text:"todo "+i, done:false});
    }
  };
  $scope.makeTodos();

  $scope.$watch("currentPage + numPerPage", function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;

    $scope.filteredTodos = $scope.todos.slice(begin, end);
  });
});


















//angular.module("myApp", ["ngTable", "ngTableDemos"]);
//
//(function() {
//  "use strict";
//
//  angular.module("myApp").controller("demoController", demoController);
//
//  demoController.$inject = ["NgTableParams", "ngTableSimpleList"];
//
//  function demoController(NgTableParams, simpleList) {
//    this.tableParams = new NgTableParams({}, {
//      dataset: simpleList
//    });
//  }
//})();
//
//(function() {
//  "use strict";
//
//  angular.module("myApp").controller("dynamicDemoController", dynamicDemoController);
//  dynamicDemoController.$inject = ["NgTableParams", "ngTableSimpleList"];
//
//  function dynamicDemoController(NgTableParams, simpleList) {
//    var self = this;
//
//    self.cols = [
//      { field: "name", title: "Name", sortable: "name", filter: { name: "text" }, show: true },
//      { field: "age", title: "Age", sortable: "age", filter: { age: "number" }, show: true },
//      { field: "money", title: "Money", sortable: "money", filter: { money: "number" }, show: true }
//    ];
//    self.tableParams = new NgTableParams({}, {
//      dataset: simpleList
//    });
//  }
//})();
//
//(function() {
//  "use strict";
//
//  angular.module("myApp").run(configureDefaults);
//  configureDefaults.$inject = ["ngTableDefaults"];
//
//  function configureDefaults(ngTableDefaults) {
//    ngTableDefaults.params.count = 5;
//    ngTableDefaults.settings.counts = [];
//  }
//
//})();
