'use strict';

angular.module('comp.filters',[])
    .filter('interval',function($parse){
        return function(array, expression, min, max){
            var getter = $parse(expression);
            // if(!array){
            //     return array;
            // }
            return array && array.filter(function (item){
                    // var value = item.price;
                    var value = getter(item);
                    return(!min || value >= min) && (!max || value <= max)
                });
        };
    })
;
