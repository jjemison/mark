var app = angular.module('mark');

app.controller('signupCtrl', function($scope){

  $scope.myInterval = 3000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 325 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/400',
    });
  };
  for (var i=0; i<3; i++) {
    $scope.addSlide();
  }
  
});
