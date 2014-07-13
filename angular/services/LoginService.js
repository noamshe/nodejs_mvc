/**
 *
 * Created by noam on 13/07/14.
 */
app.factory('SimpleAuthenticationService', function($http) {
  return {
    login: function(scope) {
      if (scope.creds.username == 'admin' && scope.creds.password == '1234') {
        //$location.path('/dashboard')
        scope.loginSucceeded = true;
        scope.loginFailed = false;
      } else {
        scope.loginFailed = true;
        scope.loginSucceeded = false;
      }
    }
  }
});

app.factory('AuthenticationService', function($http) {
  return {
    login: function(scope) {
      console.log('enter function');

      var responsePromise = $http.post("/check_credentials", scope.creds);
      responsePromise.success(function(data, status, headers, config) {
        if (data.status == 'OK') {
          //$location.path('/dashboard')
          scope.loginSucceeded = true;
          scope.loginFailed = false;
        } else {
          scope.loginFailed = true;
          scope.loginSucceeded = false;
        }
      });
      responsePromise.error(function(data, status, headers, config) {
        alert("AJAX failed!");
      });
    }
  }
});
