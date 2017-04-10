var mainApp = angular.module('mainApp', []);

mainApp.controller('MainController', ['$scope', function($scope){
  $scope.activeClass = true;
  $scope.toggleHeight = function(){
    $scope.activeClass = !scope.activeClass;
  }
}]);
