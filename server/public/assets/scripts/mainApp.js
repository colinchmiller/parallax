var mainApp = angular.module('mainApp', []);

mainApp.controller('MainController', ['$scope', function($scope){
  $scope.toggleClass = true;
  $scope.toggleHeight = function(){
    $scope.toggleClass = !$scope.toggleClass;
  }
}]);
