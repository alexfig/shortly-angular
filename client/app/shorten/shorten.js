angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.shortenLinks = [];
  $scope.addLink = function() {
    Links.postLink($scope.link.url).then(function(resp) {
      //$scope.link[url] = resp;
      $scope.shortenLinks.push(resp.data);
    });
  };
});
