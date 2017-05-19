var app = angular.module(modulesPrefix + '.about');
app.controller('AboutController', function($scope, NavigationService) {
  var vm = this;
  vm.items = [{nom:"Perchoc", prenom:'Jonathan'}];
  
});