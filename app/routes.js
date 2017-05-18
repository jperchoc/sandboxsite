angular.module('monsite')
.config(function($routeProvider) {
  $routeProvider
  .when('/liste', {
    templateUrl: 'app/views/public/list/list.part.html',
    controller: 'ListController as vm',
  })
  .when('/about', {
    templateUrl: 'app/views/public/about/about.part.html',
    controller: 'AboutController as vm',
  })
  .when('/contact', {
    templateUrl: 'app/views/public/contact/contact.part.html',
    controller: 'ContactController as vm',
  })
  .otherwise({redirectTo:'/liste'});
});