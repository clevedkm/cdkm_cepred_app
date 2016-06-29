/**
 * Created by Administrateur on 22/06/2016.
 */
'use strict';
angular.module('comp.services', [])
    .value('tva', 0.20)
    .provider('cart', {
        limit : 1000,
        $get : function(tva){
            var provider = this;
            return{
                rows:[],
                addBook : function (book) {
                    this.rows.push({book:book, quantity:1});
                },
                removeRow: function(row){},

                ht: function(row){
                    return row.book.price * row.quantity;
                },

                ttc: function(row){
                    return this.ht(row) * (1 + tva);
                },

                totalHt: function(){
                    return this.rows.reduce(function (total,row){
                        return total +this.ht(row);
                    }.bind(this),0);
                },

                totalTtc: function(){
                    var service = this;
                    return this.rows.reduce(function(total, row){
                        return total + service.ttc(row);
                    },0);
                },

                isEmpty: function(){
                    return this.rows.length == 0;
                },

                isBig : function (row){
                    return this.ht(row) > 1000;
                }

            };
        }
    })
    //autre possibilite de provider l'un ou l'autre pas les deux ensembles
    .factory('cart', function(tva){
        return{
            rows:[],
            addBook : function (book) {
                this.rows.push({book:book, quantity:1});
            },
            removeRow: function(row){},

            ht: function(row){
                return row.book.price * row.quantity;
            },

            ttc: function(row){
                return this.ht(row) * (1 + tva);
            },

            totalHt: function(){
                return this.rows.reduce(function (total,row){
                 return total +this.ht(row);
                }.bind(this),0);
            },

            totalTtc: function(){
                var service = this;
                return this.rows.reduce(function(total, row){
                    return total + service.ttc(row);
                },0);
            },

            isEmpty: function(){
                return this.rows.length == 0;
            },

            isBig : function (row){
                return this.ht(row) > 1000;
            }

        };
    })

    .factory('catalogService', function($http) {
        var url = '../api/catalog.json';

        var booksPromise = $http.get(url)
            .then(function (response) {
                return response.data;
            });
        return {
            getList: function () {
                return booksPromise;
            },
        
            getBook : function (id) {
                return booksPromise.then(function (books){
                    for(var i = 0; i< books.length;i++){
                        if(books[i].isbn10 == id){
                            return books[i];
                        }
                    }
                   throw " Book not found";
                });
            }
        };
        
        // return{
        //     list: function(){
        //         return $http.get(url)
        //             .then(function(response){
        //                 return response.data;
        //             });
        //     }
        // } ;
    })

    .factory('stateService', function(){
        var states ={};
        return function (pageId, initialValue){
          //   if(!states[pageId]){
          //       states[pageId] = initialValue;
          //   }
          // return states[pageId] ;
            return states[pageId] || (states[pageId] )
        };
    })

    .factory('orderOptions', function(){
        var options =  [
            {label:"Faire votre choix"},
            {expression: 'price',  reverse : false, label:"prix croissant"},
            {expression: 'price',  reverse : true, label:"prix decroissant"},
            {expression: 'titre',  reverse : false, label:"titre"},
            {expression: 'rating',  reverse : true, label:"meilleur notes"}
        ];
        return {
            list:options, default : options[3]
        };
    })
;
