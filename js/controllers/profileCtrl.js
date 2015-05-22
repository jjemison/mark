var app = angular.module('mark')

app.controller('profileCtrl', function($scope, $http) {

  if($scope.search === undefined){
    $scope.search = "Wedding Crashers";
    fetch();
  }

  var pendingTask;
   
  $scope.change = function(){
    if(pendingTask) {
      clearTimeout(pendingTask);
    }
    pendingTask = setTimeout(fetch, 300);
  };

  function fetch() {
    $http.get("http://www.omdbapi.com/?t=" + 
       $scope.search + "&tomatoes=true&plot=full")
     .success(function(response){$scope.details = response;});
   
    $http.get("http://www.omdbapi.com/?s=" + $scope.search)
     .success(function(response){$scope.related = response;});
  }

  $scope.update = function(movie){
    $scope.search = movie.Title;
    $scope.change();
  };

  $scope.select = function(){
    this.setSelectionRange(0, this.value.length);
  }

  $scope.want = [];

  $scope.addMovie = function() {
    $scope.want.push($scope.details)
  }

 

});