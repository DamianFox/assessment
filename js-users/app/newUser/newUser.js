angular.module('Js-Users-App').controller('NewUserCtrl', NewUserCtrl);


function NewUserCtrl($route, $scope, userDataFactory){

	$scope.submitNewUser = function () {

	    var postData = {
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            status: "active"
        };

        userDataFactory.newUser(postData).then(function(response) {
            if (response.status === 201) {
                $route.reload();
            }
        }).catch(function(error) {
            console.log(error);
        });
	}
}
