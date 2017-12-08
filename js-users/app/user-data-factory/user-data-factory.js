angular.module('Js-Users-App').factory('userDataFactory', userDataFactory);

function userDataFactory($http) {
    return {
        userList: userList,
        getUser: getUser,
        editUser: editUser,
        newUser: newUser
    };

    // Get the list of users
    function userList() {
        return $http.get("http://js-assessment-backend.herokuapp.com/users.json").then(complete).catch(failed);
    }

    // Get a specific user by id
    function getUser(id) {
        return $http.get("http://js-assessment-backend.herokuapp.com/users/"+id+".json").then(complete).catch(failed);
    }

    // Edit a specific user
    function editUser(id, currentUser) {
        return $http.put("http://js-assessment-backend.herokuapp.com/users/"+id+".json", currentUser).then(complete).catch(failed);
    }

    // Create a new user
    function newUser(newUser) {
        return $http.post("http://js-assessment-backend.herokuapp.com/users.json", newUser).then(complete).catch(failed);
    }

    // Success function 
    function complete(response) {
        return response;
    }

    // Error function
    function failed(error) {
        console.log(error.statusText);
    }
}