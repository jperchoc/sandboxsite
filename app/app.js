angular.module('monsite', dependencies)
.controller('MainCtrl', function($scope, $rootScope, NavigationService, AuthentificationService) {
  console.log("Initialisation du mainctrl")
  var vm = $scope;
  vm.navigationService = NavigationService;
  vm.authentificationService = AuthentificationService;
  vm.__DEBUG=false;
});