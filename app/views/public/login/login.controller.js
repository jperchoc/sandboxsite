var app = angular.module('monsite.login');
console.log("list.controller initialisé");
app.controller('LoginController', function($scope, $location, NavigationService, AuthentificationService) {
  NavigationService.setActivePage("login");
  var vm = this;
  vm.mail="";
  vm.password="";
  vm.submitform = function() {
    var user = {nom: "Perhoc", prenom: "Jonathan", id:0};
    AuthentificationService.connect(user);
    $location.path("/secure/home");
  }
});
