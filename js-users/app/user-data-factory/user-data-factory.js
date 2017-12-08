angular.module('Js-Users-App').factory('userDataFactory', userDataFactory);

function userDataFactory($http) {
    return {
        userList: userList,
        getUser: getUser,
        editUser: editUser,
        newUser: newUser
    };

    function userList() {
        return $http.get("http://js-assessment-backend.herokuapp.com/users.json").then(complete).catch(failed);
    }

    function getUser(id) {
        return $http.get("http://js-assessment-backend.herokuapp.com/users/"+id+".json").then(complete).catch(failed);
    }

    function editUser(id, currentUser) {
        return $http.put("http://js-assessment-backend.herokuapp.com/users/"+id+".json", currentUser).then(complete).catch(failed);
    }

    function newUser(newUser) {
        return $http.post("http://js-assessment-backend.herokuapp.com/users.json", newUser).then(complete).catch(failed);
    }

    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }
}