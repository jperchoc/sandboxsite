var app = angular.module(modulesPrefix + '.list');
console.log("list.controller initialisé");
app.controller('ListController', function($scope, NavigationService, AuthentificationService, APIService) {
  var vm = this;
  vm.items = APIService.getUsers();
  vm.connect = function(item) {
    AuthentificationService.connect(item);
    console.log(item)
  };
});
