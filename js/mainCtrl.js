angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.name = 'Spencer';
  $scope.friends = [ 'Haley', 'Derek', 'Jim', 'James', 'Carol', 'Max', 'Sterling' ];

  $scope.addFriend = function(){
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = "";
  };
});
