var app = angular.module('monsite.list');
console.log("list.controller initialisé");
app.controller('ListController', function($scope, $rootScope) {
  var vm = this;
  vm.items = [
    {nom:"Perchoc", prenom:'Jonathan'},
    {nom:"Bleunven", prenom:'Mathilde'},
    {nom:"Robert", prenom:'Jean-Marc'},
    {nom:"Sarradel", prenom:'Laeticia'},
    {nom:"Robert", prenom:'Kilian'}
  ];
  $scope.$parent.__active="liste";
});
