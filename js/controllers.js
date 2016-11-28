var myApp = angular.module('myApp',[]);
myApp.controller=('MyController', function MyController($scope) {
  $scope.myObject = {
    'club' : 'CLL FST',
    'workshop' : 'Getting started with Angular',
    'author' : 'Mohamed Wassim Dimassi'
  }
});