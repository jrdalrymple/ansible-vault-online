angular.module('vaultapp', ['ui.bootstrap']);
angular.module('vaultapp').controller('mainCtrl', function ($scope, $http, $window) {
  $scope.open = function () {};
  $scope.crypt = function () {
    var data = {password: $scope.password, vault_id: $scope.vault_id, source: $scope.source};
    var config = { headers : { 'Content-Type': 'application/json;charset=utf-8;' } };
    $http.post('crypt', data, config)
      .then(function(resp) {
        $scope.source = resp.data.value;
        $scope.result = "";
        $window.document.getElementById('source').focus();
      }, function(resp) {
        $scope.result = resp.data.value;
      });
  };
});
