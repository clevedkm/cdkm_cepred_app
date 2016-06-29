'use strict'

angular.module('comp.directives', [])
.directive("rating", function(){
    return{
        restrick:"A",
        link:function (scope, element,attrs){
            // scope.$watch(attrs.rating, function(value){
            //     //element.text(value+"*");
            //     var html = '',
            //         img ='<img src="img/star.png">';
            //
            //     for(var i =0; i< value; i++){
            //         html += img;
            //     }
            //     element.html(html);
            // });

            scope.$watchGroup([attrs.rating, attrs.max], function (array){
                var rating = array[0], max= array[1],
                    html='',
                    img = '<img src="img/star.png">',
                    imgEmpty = '<img src="img/empty-star.png">',
                    i;
                for(i =0 ;i< rating; i++){
                    html += img;
                }
                for( ;i< max; i++){
                    html += imgEmpty;
                }
                element.html(html);
            });
        }
    };
})