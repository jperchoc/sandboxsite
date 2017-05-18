angular.module('monsite', dependencies)
.controller('MainCtrl', function($scope) {
})
.config(function($routeProvider) {
  $routeProvider
  .when('/liste', {
    templateUrl: 'app/list/list.part.html',
    controller: 'ListController as vm',
  })
  .when('/about', {
    templateUrl: 'app/about/about.part.html',
    controller: 'AboutController as vm',
  })
  .otherwise({redirectTo:'/liste'});
})