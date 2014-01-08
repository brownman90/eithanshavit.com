'use strict';

/* Filters */
var esFilters = angular.module('eithanshavit.filters', [])
    
esFilters.filter('shuffle', function() {
    return function(o){
           for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
    }
});
