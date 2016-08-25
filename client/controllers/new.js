// app.controller('newController', ['$scope', 'userFactory', '$location', function($scope, userFactory , $location) {
      
// 	function redirect(){
//         $location.url('/');
//     }
//       $scope.addUser = function(){
//         console.log($scope.user);
//         $scope.create = function (){
//         	userFactory.create($scope.user, redirect())
//         }
//         // redirect();
//       }
//     }]);





app.controller('newController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
  $scope.addUser = function(){
    userFactory.create($scope.user, function() {
      $location.url('/index');
    });
  }
}]);