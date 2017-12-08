angular.module('Js-Users-App').controller('EditUserCtrl', EditUserCtrl);

function EditUserCtrl($route, $routeParams, $scope, userDataFactory){
	$scope.response_message = "";

	var id = $routeParams.id;

	if(id){
		// Get a single user
	 	userDataFactory.getUser(id).then(function(response) {
	    	$scope.currentUser = response.data;
	  	});
	}

	$scope.editUser = function () {

		if($scope.first_name && $scope.last_name){
			var putData = {
	            first_name: $scope.first_name,
	            last_name: $scope.last_name,
	        };

	        userDataFactory.editUser(id, putData).then(function(response) {
	            if (response.status === 204) {
	            	$scope.first_name = "";
	            	$scope.last_name = "";
	            	$scope.response_message = "User updated!";
	            }
	        }).catch(function(error) {
	            $scope.response_message = error;
	        });
		} else if($scope.first_name && !$scope.last_name){
			var putData = {
	            first_name: $scope.first_name,
	        };

	        userDataFactory.editUser(id, putData).then(function(response) {
	            if (response.status === 204) {
	            	$scope.first_name = "";
	            	$scope.last_name = "";
	            	$scope.response_message = "User updated!";
	            }
	        }).catch(function(error) {
	            $scope.response_message = error;
	        });
		} else if(!$scope.first_name && $scope.last_name){
			var putData = {
	            last_name: $scope.last_name,
	        };

	        userDataFactory.editUser(id, putData).then(function(response) {
	            if (response.status === 204) {
	            	$scope.first_name = "";
	            	$scope.last_name = "";
	            	$scope.response_message = "User updated!";
	            }
	        }).catch(function(error) {
	            $scope.response_message = error;
	        });
		} else if(!$scope.first_name && !$scope.last_name){
			$scope.response_message = "The inputs shouldn't be empty!";
		}
	}
}