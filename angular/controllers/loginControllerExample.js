/**
 *
 * Created by noam on 13/07/14.
 */

app.controller("LoginController", ['$scope', '$location', function($scope, $location){
  $scope.creds = {username: "", password: ""};
  $scope.login = function() {
    if ($scope.creds.username == 'admin' && $scope.creds.password == '1234') {
      //$location.path('/dashboard')
      $scope.loginSucceeded = true;
      $scope.loginFailed = false;
    } else {
      $scope.loginFailed = true;
      $scope.loginSucceeded = false;
    }
  },
  $scope.logout = function() {
    $location.path('/');
  },
  $scope.submit = function(){
    alert('a');
  }
}]);

app.controller("Ctrl", function($scope){
  $scope.understand = "I now understand how the scope works!";
  $scope.model = {};
  $scope.submit = function(){
    alert('a');
  }
});
