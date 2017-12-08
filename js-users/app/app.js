var app = angular.module("Js-Users-App", ["ngRoute"]).config(config);

function config($routeProvider) {
	
	$routeProvider
	.when("/", {
	  templateUrl: "/app/main/main.html"
	})
	.when("/new", {
	  templateUrl: "/app/new-user/new-user.html"
	})
	.when("/edit", {
	  templateUrl: "/app/edit-user/edit-user.html"
	})
	.otherwise({
	  redirectTo: "/"
	});
}