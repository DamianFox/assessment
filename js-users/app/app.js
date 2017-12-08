var app = angular.module("Js-Users-App", ["ngRoute"]).config(config);

function config($routeProvider) {
	
	$routeProvider
	.when("/", {
	  templateUrl: "/app/main/main.html"
	})
	.when("/new", {
	  templateUrl: "/app/newUser/newUser.html"
	})
	.when("/edit", {
	  templateUrl: "/app/editUser/editUser.html"
	})
	.otherwise({
	  redirectTo: "/"
	});
}