'use strict';
//module , route, controller

angular.module('view.book', ['ngRoute','ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider.when('/book/:bookId', {
            templateUrl: 'view-book/book.html',
            controller: 'bookController',
            controllerAs: 'bookCtrl' // Alias pour publier le contrôleur dans le scope

        });
    })
    // .controller('bookController', function ($http, $routeParams, $rootScope) {
    //     var ctrl = this;
    //     var url ='../api/' + $routeParams.bookId + '.json';
    //
    //     $http.get(url)
    //         .then(function (response){
    //             ctrl.book = response.data;
    //             $rootScope.title = "Livre " + ctrl.book.title;
    //         },function(response){
    //             throw "coucou erreur";
    //         });
    //
    // })

    .controller('bookController', function (catalogService, $routeParams, $rootScope) {
        var ctrl = this;
        
        catalogService.getBook($routeParams.bookId)
            .then(function (book) {
            ctrl.book = book;
                $rootScope.title ="Livre" +ctrl.book.title;
        }, function (error) {
            ctrl.error = error;
        });
    })
;

