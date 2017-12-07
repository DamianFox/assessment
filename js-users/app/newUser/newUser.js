angular.module('Js-Users-App').controller('NewUserCtrl', NewUserCtrl);


function NewUserCtrl($route, $scope, userDataFactory){
	$scope.user_created = false;

	$scope.submitNewUser = function () {

		if($scope.first_name && $scope.last_name){
			var postData = {
	            first_name: $scope.first_name,
	            last_name: $scope.last_name,
	            status: "active"
	        };

	        userDataFactory.newUser(postData).then(function(response) {
	            if (response.status === 201) {
	            	$scope.first_name = "";
	            	$scope.last_name = "";
	                $scope.user_created = true;
	            }
	        }).catch(function(error) {
	            console.log(error);
	        });
		}
	    
	}
}
