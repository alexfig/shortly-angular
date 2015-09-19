angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function () {
    Links.fetchLinks().then(function (resp) {
      $scope.data.links = resp.data;
    });
  };
  $scope.getLinks();
});