angular.module('Js-Users-App').factory('PagerService', PagerService).controller('UsersList', UsersList);

function UsersList($route, $scope, $filter, userDataFactory, PagerService){
	$scope.users = []
	$scope.currentPage = 0;
    $scope.pageSize = 10;

    $scope.setPage = setPage;
    $scope.pager = {};

    // Get the list of users
    userDataFactory.userList().then(function(response) {
        $scope.users = response.data;
        $scope.setPage(1);
    });

    function setPage(page) {
        if (page < 1 || page > $scope.pager.totalPages) {
            return;
        }

        // get pager object from service
        $scope.pager = PagerService.GetPager($scope.users.length, page);

        // get current page of items
        $scope.items = $scope.users.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
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

function PagerService() {
    // service definition
    var service = {};
 
    service.GetPager = GetPager;
 
    return service;
 
    // service implementation
    function GetPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;
 
        // default page size is 10
        pageSize = pageSize || 10;
 
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
 
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);
 
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}