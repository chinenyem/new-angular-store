angular.module("storeFreatureadminhttp",["ngRoute"])

.config(function ($routeProvider) {

   $routeProvider
        .when("/storefreatureadminhttp/luxbag", {
            templateUrl: "views/storefreatureadminhttpview/show.html",
            controller: "storefreatureadminhttpCtrl"
        })
        .when("/storefreatureadminhttp", {
           templateUrl: "views/storefreatureadminhttpview/list.html",
           controller: "storefreatureadminhttpCtrl"
         })
        .when("/storefreatureadminhttp/:prodId", {
           templateUrl: "views/storefreatureadminhttpview/luxbag.html",
           controller: "storefreatureadminhttpCtrl"
         })
        
        .otherwise({
           redirectTo: "/"
         });
});



