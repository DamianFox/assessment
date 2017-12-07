var app = angular.module("Js-Users-App", ["ngRoute", 'angularUtils.directives.dirPagination']).config(config);

function config($routeProvider) {
	
	$routeProvider
	.when("/", {
	  templateUrl: "/app/main/main.html"
	})
	.when("/add", {
	  templateUrl: "/app/addUser/addUser.html"
	})
	.otherwise({
	  redirectTo: "/"
	});
}