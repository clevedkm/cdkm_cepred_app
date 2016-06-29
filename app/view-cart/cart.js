'use strict';
//module , route, controller

angular.module('view.cart', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'view-cart/cart.html',
            controller: 'cartController',
            controllerAs: 'cartCtrl' // Alias pour publier le contrôleur dans le scope

        });
    })
    .controller('cartController', function (cart,$rootScope,$scope) {
        var ctrl = this;
        $rootScope.title = "Votre panier";
        ctrl.service = cart;

        $scope.$watch(function(){
           return cart.rows;
        }, function() {
            cart.rows.forEach(function(row){
                if(row.quantity < 1){
                    row.quantity =1;
                }
            });
        }, true);

    })
;

