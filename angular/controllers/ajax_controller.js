/**
 *
 * Created by noam on 7/7/14.
 */
app.controller("ajaxController", function($scope, $http){
  $scope.myData = {};
  $scope.myData.doClick = function(item, event) {

    var responsePromise = $http.get("/save_ajax_example");

    responsePromise.success(function(data, status, headers, config) {
      $scope.myData.fromServer = data.result;
    });
    responsePromise.error(function(data, status, headers, config) {
      alert("AJAX failed!");
    });
  }
});
