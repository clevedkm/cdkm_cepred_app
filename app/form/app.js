'use strict';

angular.module('app', ['ngMessages'])
    .controller('DynFormCtrl', function (formService) {
        var ctrl = this;
        formService.loadDesc().then(function (fields){
            ctrl.fields = fields;
        });
        ctrl.data= {};
        ctrl.save = function (){
            if(ctrl.form.$valid){
                ctrl.status = 'saving';
                formService.saveData(ctrl.data)
                    .then(function(){
                        ctrl.status='seved';
                        $timeout(function(){
                            ctrl.status = '';
                        },3000);
                    });
            }
        };
    })
    .factory('formService', function ($http) {
        var urlDesc = 'https://api.mongolab.com/api/1/databases/forms/collections/forms/51669d15e4b04a20de65fc58?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
        var urlSave = 'https://api.mongolab.com/api/1/databases/forms/collections/data?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
        return {
          loadDesc : function(){
              return $http.get(urlDesc)
                  .then(function (response){
                      return response.data.fields;
                  }, function (reponse){
                      throw " could not load form  description";
                  });
          },
            saveData: function(data){
                return $http.post(urlSave,data)
                    .then(function(respponse){
                        return "save ok";
                    }, function(response){
                        throw "save error";
                    })
            }
        };
    })
;

