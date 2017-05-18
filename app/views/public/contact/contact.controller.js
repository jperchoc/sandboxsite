var app = angular.module('monsite.contact');
app.controller('ContactController', function($scope) {
  var vm = this;
  $scope.$parent.__active='contact';
});