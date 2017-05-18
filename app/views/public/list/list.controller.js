var app = angular.module('monsite.list');
console.log("list.controller initialisé");
app.controller('ListController', function($scope, $rootScope) {
  var vm = this;
  vm.items = [{nom:"Perchoc", prenom:'Jonathan'}];
  $scope.$parent.__active="liste";
});
