var app = angular.module('monsite.list');
console.log("list.controller initialisé");
app.controller('ListController', function($scope, $rootScope, NavigationService, AuthentificationService) {
  NavigationService.setActivePage("liste");
  var vm = this;
  var root = $scope.$parent;
  vm.items = [
    {nom:"Perchoc", prenom:'Jonathan', id:0},
    {nom:"Bleunven", prenom:'Mathilde', id:1},
    {nom:"Robert", prenom:'Jean-Marc', id:2},
    {nom:"Sarradel", prenom:'Laeticia', id:3},
    {nom:"Robert", prenom:'Kilian', id:4}
  ];

  vm.connect = function(item) {
    AuthentificationService.connect(item);
    console.log(item)
  };
});
