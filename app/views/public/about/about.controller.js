var app = angular.module('monsite.about');
app.controller('AboutController', function($scope, $rootScope) {
  var vm = this;
  vm.items = [{nom:"Perchoc", prenom:'Jonathan'}];
  $scope.$parent.__active='about';
});