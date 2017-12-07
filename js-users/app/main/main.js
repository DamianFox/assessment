angular.module('Js-Users-App').controller('UsersList', UsersList);

function UsersList($route, $scope, $filter, userDataFactory){
	$scope.users = []
	$scope.currentPage = 0;
    $scope.pageSize = 10;

	// Get the list of users
 	userDataFactory.userList().then(function(response) {
    	$scope.users = response.data;
  	});

    // Get the number of pages from the number of users
  	$scope.numberOfPages = function(){
        return Math.ceil($scope.users.length/$scope.pageSize);                
    }

    // Change the status of the user
    $scope.changeStatus = function(id, status){

        if(status == "locked"){
            newStatus = "active";
        } else {
            newStatus = "locked";
        }

        var putData = {
          id: id,
          status: newStatus
        };

        userDataFactory.editUser(id, putData).then(function(response) {
            if (response.status === 204) {
                $route.reload();
            }
        }).catch(function(error) {
            console.log(error);
        });
    }
}

// startFrom filter
app.filter('startFrom', function() {
	return function(input, start) {
    	start = +start; //parse to int
    	return input.slice(start);
	}
});