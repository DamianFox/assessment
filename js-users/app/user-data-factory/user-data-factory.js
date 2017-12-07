angular.module('Js-Users-App').factory('userDataFactory', userDataFactory);

function userDataFactory($http) {
    return {
        userList: userList
        /*editUser: editUser*/
    };

    function userList() {
        return $http.get("http://js-assessment-backend.herokuapp.com/users.json").then(complete).catch(failed);
    }

    /*function editUser() {

    }*/

    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }
}