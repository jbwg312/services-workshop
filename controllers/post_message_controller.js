app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
	$scope.vw.result = {};
	$scope.vw.result.text;
	$scope.vw.add = function(){
		MessagesService.add($scope.vw.result);
		$location.path('/');
		$location.replace();
	}
})
