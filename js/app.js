var app = angular.module('mark', ['ngRoute','ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
  .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'signupCtrl'
    })
  .otherwise({
      redirectTo: '/signup'
    });

});

