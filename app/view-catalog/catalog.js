'use strict';
//module , route, controller

angular.module('view.catalog', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/catalog', {
            templateUrl: 'view-catalog/catalog.html',
            controller: 'catalogController',
            controllerAs: 'catalogCtrl' // Alias pour publier le contrôleur dans le scope

        });
    })
    .controller('catalogController', function (orderOptions, stateService, catalogService,$location,$rootScope,cart) {
        var ctrl = this;
        
        $rootScope.title ="catalalog des livres";

        catalogService.getList().then(function (books){
           ctrl.catalog = books; 
        });
        
        // $http.get('../api/catalog.json')
        //     .then(function (response){
        //         ctrl.catalog = response.data;
        //     },function(response){
        //         throw "coucou erreur";
        //     });
        
        ctrl.state = stateService('/catalog', {
            selectedOrder: orderOptions.default
        });
        ctrl.orderOptions = orderOptions.list;

     // ctrl.orderOptions = [
     //     {label:"Faire votre choix"},
     //     {expression: 'price',  reverse : false, label:"prix croissant"},
     //     {expression: 'price',  reverse : true, label:"prix decroissant"},
     //     {expression: 'titre',  reverse : false, label:"titre"},
     //     {expression: 'rating',  reverse : true, label:"meilleur notes"}
     // ];
     //    ctrl.selectedOrder= ctrl.orderOptions[0];

        ctrl.buy = function(book){
            cart.addBook(book);
            console.log(cart);
            // redirection vers le route d'affichage panier
        }

    })
;

