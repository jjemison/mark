var app = angular.module('mark')

app.service('profileService', function($http) {

 
  function fetch() {
    $http.get("http://www.omdbapi.com/?t=" + 
       $scope.search + "&tomatoes=true&plot=full")
     .success(function(response){$scope.details = response;});
   
    $http.get("http://www.omdbapi.com/?s=" + $scope.search)
     .success(function(response){$scope.related = response;});
  }



});