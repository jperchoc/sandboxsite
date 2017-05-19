var app = angular.module('monsite.about');
app.controller('AboutController', function($scope, NavigationService) {
  NavigationService.setActivePage("about");
  var vm = this;
  vm.items = [{nom:"Perchoc", prenom:'Jonathan'}];
  
});