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
   .when('/login', {
    templateUrl: 'app/views/public/login/login.part.html',
    controller: 'LoginController as vm',
  })
  .when('/secure/home', {
    templateUrl: 'app/views/public/contact/contact.part.html',
    controller: 'ContactController as vm',
 })
  .otherwise({redirectTo:'/liste'});
})
//Intercepteur vérifiant la connexion de l'utilisateur
.run(['$rootScope', '$location', 'AuthentificationService', function($rootScope, $location, AuthentificationService) {
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
        var logged = AuthentificationService.getConnected();
        var privateLink = currRoute.$$route.originalPath.indexOf('/secure') !== -1;
        if(privateLink && !logged) {
            event.preventDefault();
            $location.path('/login');
        }
    });
}]);