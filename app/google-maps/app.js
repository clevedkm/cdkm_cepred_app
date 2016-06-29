"use strict";

angular.module('app', [])

    .controller('Ctrl', function() {
        this.maps = [
            { center: {lat: 47.211, lng: -1.566}, zoom: 12, label:"Nantes" },
            { center: {lat: 37.423, lng: -122.086}, zoom: 9, label:"Mountain view"}
        ];
    })

    .component('gmaps', {
        templateUrl: 'gmaps.html',
        transclude : true,
        bindings: {
            center:'=',
            zoom:'='
        },
        controller: function ($scope, $element) {

            var ctrl = this;

            var div = $element.find('div')[0];
            var  map = new google.maps.Map(div, {
                center: ctrl.center,
                zoom: ctrl.zoom
            });
            // $scope.$watch('$ctrl.zoom', function(zoom){
            //     map.setZoom(zoom);
            // });

            $scope.$watch(function(){
                return ctrl.zoom;
            }, function(zoom){
                map.setZoom(zoom);
            });

            // $scope.$watch('$ctrl.center', function(center){
            //     map.setCenter(center);
            // }, true);

            $scope.$watch(function(){
                return ctrl.center;
            }, function(center){
                map.setCenter(center);
            },true);


            map.addListener('zoom_changed', function() {
                $scope.$applyAsync(function(){
                    ctrl.zoom = map.getZoom();
                });
            });

            map.addListener('center_changed', function() {
                $scope.$applyAsync(function(){
                    ctrl.center.lat = map.getCenter().lat();
                    ctrl.center.lng = map.getCenter().lng();
                });
            });

            ctrl.bookmarks =[];

            ctrl.goto = function(bookmarker){
                ctrl.center.lat = bookmarker.lat;
                ctrl.center.lng = bookmarker.lng;
                ctrl.zoom  = bookmarker.zoom;
            }


            ctrl.addMarker = function(){
                ctrl.bookmarks.push({
                    lat: ctrl.center.lat,
                    lng: ctrl.center.lng,
                    zoom: ctrl.zoom,
                    label: ctrl.markerLabel
                });
                new google.maps.Marker({
                    map:map,
                    position:ctrl.center,
                    title:ctrl.markerLabel
                });
                ctrl.markerLabel='';
            }

        }
    });
