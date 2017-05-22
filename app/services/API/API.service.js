angular.module(modulesPrefix + '.API')
.service('APIService', function() {
  return {
    getUsers:getUsers

  }  
});
var getUsers = function() {
    return MOCK.users;  
}