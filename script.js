var app = angular.module("mboutiqueApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"home.html",
            controller:"mainController"
        })
        .when('/our-macarons',{
            templateUrl:"macarons.html",
            controller:"macaronsController"
        })
        .when('/gifts-parties',{
            templateUrl:"gifts-parties.html",
            contoller:"giftsController"
        })
        .when('/contact',{
            templateUrl:"contact.html",
            controller: "contactController"
        })
        .otherwise({
            redirectTo:'/'
        });

});

app.controller('mainController', function($scope){
   $scope.banner = "aassets/images/welcome-imagae.png";
}).controller('macaronsController', function($scope){
    $scope.banner = "assets/images/our-macarons-image.png";
}).controller('giftsController', function($scope){
    $scope.banner = "assets/images/gifts-parties-image.png";
}).controller('contactController', function($scope){
    $scope.banner = "assets/images/contact-image.png";
});