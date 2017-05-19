angular.module(modulesPrefix, dependencies)
.controller('MainCtrl', function($scope, $rootScope, NavigationService, AuthentificationService) {
  console.log("Initialisation du mainctrl")
  var vm = $scope;
  vm.navigationService = NavigationService;
  vm.authentificationService = AuthentificationService;
  vm.routes = routes;
  vm.__DEBUG=false;
});