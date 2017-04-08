var mainApp = angular.module('mainApp', []);

mainApp.controller('MainController', ['$scope', function($scope){
  console.log("MainController is running");

  $scope.toggleHeight = function(){
    console.log("clicking it, bitch!");
  }
}]);
