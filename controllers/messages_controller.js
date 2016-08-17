app.controller('MessagesController', ['$scope', 'MessagesService', function ($scope, MessagesService) {
  $scope.vw = {};
  $scope.vw.success = "Success!!";
	$scope.vw.messages = MessagesService.all;
}])
