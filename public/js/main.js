var app = angular.module('myApp', []);
 
app.config(function($locationProvider, $routeProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: 'partials/index', controller: 'ctrl' })
    .when('/about', { templateUrl: 'partials/about', controller: 'ctrl' })
    .otherwise({redirectTo:'/'});
});
 
app.controller('ctrl', function($scope){});
