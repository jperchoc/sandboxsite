angular.module('monsite.navigation')
.service('NavigationService', function() {
  var activePage = "liste";

  return {
    getActivePage: function() {
      return activePage;
    },
    setActivePage: function(page) {
      activePage = page;
    }
  }
});