angular.module(modulesPrefix)
.config(function($routeProvider) {
   for(var i=0; i<routes.length; i++) {
     $routeProvider.when(routes[i].route, {
        templateUrl: routes[i].templateUrl,
        controller: routes[i].controller + ' as vm',
      })
   }
  $routeProvider.otherwise({redirectTo:'/liste'});
})

.run(['$rootScope', '$location', 'AuthentificationService', 'NavigationService', function($rootScope, $location, AuthentificationService, NavigationService) {
  //Intercepteur vérifiant la connexion de l'utilisateur
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
        var logged = AuthentificationService.getConnected();
        if(currRoute.$$route) {
          var privateLink = currRoute.$$route.originalPath.indexOf('/secure') !== -1;
          if(privateLink && !logged) {
              event.preventDefault();
              $location.path('/login');
          }
        }
    },
    //Intercepteur recupérant la page active pour la navbar
    $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
      NavigationService.setActivePage();
    })
  );
}]);
