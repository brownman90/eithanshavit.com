'use strict';

/* Controllers */

var esApp = angular.module('eithanshavit.controllers', []);

esApp.controller('MainCtrl', ['$location', '$anchorScroll', '$route', '$scope', '$http', '$routeParams', function($location, $anchorScroll, $route, $scope, $http, $routeParams){
   this.$routeParams = $routeParams;
   this.$route = $route;

   $scope.scrollTo = function(id) {
       var old = $location.hash();
       $location.hash(id);
       $anchorScroll();
       //reset to old to keep any additional routing logic from kicking in
       $location.hash(old);
   };

   $scope.navButtons = [
      { 
         'name': 'about',
         'url': 'about',
         'style': 'nav-about'
      },
      { 
         'name': 'websites',
         'url': 'websites',
         'style': 'nav-websites'
      },
      { 
         'name': 'apps',
         'url': 'apps',
         'style': 'nav-apps'
      },
      { 
         'name': 'hardware',
         'url': 'hardware',
         'style': 'nav-hardware'
      },
      { 
         'name': 'photography',
         'url': 'photography',
         'style': 'nav-photography'
      },
      { 
         'name': 'github',
         'url': 'github',
         'style': 'nav-github'
      },
   ];

   $http.get('models/gallery_east.json').success(function(data) {
       $scope.galleryEastImages = shuffle(data);
   });

   $http.get('models/gallery_israel.json').success(function(data) {
       $scope.galleryIsraelImages = shuffle(data);
   });

   $http.get('models/gallery_more.json').success(function(data) {
       $scope.galleryMoreImages = shuffle(data);
   });

   $http.get('models/gallery_verbalClock.json').success(function(data) {
       $scope.verbalClockImages = data;
   });
   $scope.isButtonActive = function(buttonName){
      return buttonName == $routeParams['categoryId'];
   };
  }]);

function shuffle(o) {
   for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
};
