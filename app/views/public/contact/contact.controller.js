var app = angular.module('monsite.contact');
app.controller('ContactController', function($scope, NavigationService) {
  NavigationService.setActivePage("contact");
});