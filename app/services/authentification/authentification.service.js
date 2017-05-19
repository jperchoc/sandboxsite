angular.module(modulesPrefix + '.authentification')
.service('AuthentificationService', function() {
  var connected = false;
  var connectedUser = true;
  return {
    connect: function(user) {
      connected = true;
      connectedUser = user;
    },
    disconnect: function() {
      connected = false;
      connectedUser = null;
    },
    getConnected: function() {
      return connected;
    },
    getConnectedUser: function() {
      return connectedUser;
    }
  }
});