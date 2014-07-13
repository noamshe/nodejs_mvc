/**
 *
 * Created by noam on 13/07/14.
 */

app.controller("LoginController", function($scope, $location, AuthenticationService){
  $scope.creds = {username: "", password: ""};
  $scope.login = function() {
     AuthenticationService.login($scope);
  }
});
