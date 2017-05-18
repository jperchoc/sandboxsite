angular.module('monsite', dependencies)
.controller('MainCtrl', function($scope, $rootScope) {
  $rootScope.__active="liste";
  $scope.__active="liste";
  $rootScope.__DEBUG=false;
  $scope.__DEBUG=false;
});