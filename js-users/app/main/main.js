angular.module('Js-Users-App').controller('UsersList', UsersList);

// UsersList.$inject = ['$scope', 'userDataFactory'];

function UsersList($scope, $filter, userDataFactory){
	$scope.users = []
	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.q = '';

	// Get the list of users
 	userDataFactory.userList().then(function(response) {
    	$scope.users = response.data;
  	});

  	$scope.numberOfPages=function(){
        return Math.ceil($scope.users.length/$scope.pageSize);                
    }

    $scope.changeStatus=function(status){
        console.log(status);
    }
}

// Let's make a startFrom filter
app.filter('startFrom', function() {
	return function(input, start) {
    	start = +start; //parse to int
    	return input.slice(start);
	}
});