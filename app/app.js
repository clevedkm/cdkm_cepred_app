'use strict';

angular.module('app', ['ngRoute',
    'view.catalog',
    'view.book',
    'comp.filters',
    'comp.services',
    'view.cart',
    'comp.directives'])
    .config(function ($routeProvider){
        $routeProvider.otherwise({
            redirectTo:'/catalog'
        });
    })
    .config(function (cartProvider){
        cartProvider.limit = 200;
    })

;

