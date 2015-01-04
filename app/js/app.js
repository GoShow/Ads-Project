var adsApp = angular.module('adsApp', ['ngRoute','dcbImgFallback'])
    .config(function($routeProvider){
        $routeProvider.when('/all-ads', {
            templateUrl: 'templates/all-ads.html'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html'
        });

        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html'
        });

        $routeProvider.otherwise({redirectTo: '/all-ads'});
    })