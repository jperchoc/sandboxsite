angular.module(modulesPrefix + '.navigation')
.service('NavigationService', function($route) {
  var activePage = "liste";

  return {
    getActivePage: function() {
      return activePage;
    },
    setActivePage: function() {
      var actualroute = $route.current.$$route.originalPath;
      for(var i=0; i<routes.length;i++) {
        if(routes[i].route == actualroute) {
          activePage = routes[i].activeTag;
        }
      }
    }
  }
});