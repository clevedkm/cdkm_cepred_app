
(function() {
  "use strict";
  var myApp = angular.module('myApp',[]);
  myApp.controller("demoController", demoController);
  demoController.$inject = ["NgTableParams", "ngTableSimpleList"];

  function demoController(NgTableParams, simpleList) {
    this.tableParams = new NgTableParams({}, {
      dataset: simpleList
    });
    return this;
  };


  myApp.controller("dynamicDemoController", dynamicDemoController);
  dynamicDemoController.$inject = ["NgTableParams", "ngTableSimpleList"];

  function dynamicDemoController(NgTableParams, simpleList) {
    var self = this;

    self.cols = [
      { field: "name", title: "Name", sortable: "name", filter: { name: "text" }, show: true },
      { field: "age", title: "Age", sortable: "age", filter: { age: "number" }, show: true },
      { field: "money", title: "Money", sortable: "money", filter: { money: "number" }, show: true }
    ];
    self.tableParams = new NgTableParams({}, {
      dataset: simpleList
    });
  }

  myApp.run(configureDefaults);
  configureDefaults.$inject = ["ngTableDefaults"];

  function configureDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 5;
    ngTableDefaults.settings.counts = [];
  };

})();