angular.module("storeFeaturehttp")
.controller("storefeaturehttpCtrl", function ($rootScope, $scope, $location, $routeParams, storefeaturehttpSvc){
	storefeaturehttpSvc.getcheapProducts().success(function (cheapproducts){
		$scope.cheapproducts = cheapproducts;
	});
		storefeaturehttpSvc.getcheapProduct($routeParams.cheapproductId).success(function (response){
		$scope.singleProduct = response.data;
	});


		$scope.singleProduct = storefeaturehttpSvc.findProductByIdx($routeParams.cheapproductId);

		$scope.addCheap = function(cheapproduct){
		storefeaturehttpSvc.addCheap({
			quantity: 1,
			designer:cheapproduct.designer,
			price:cheapproduct.price,
			image:cheapproduct.image,
			description:cheapproduct.description,
			link:cheapproduct.link,
			reviews: []
		}).then(function (){
		$location.path("/storefeaturehttp");
		});
	};
		
		$scope.editProducts = function (cheapproduct){
		storefeaturehttpSvc.updateProduct(cheapproduct)
				$location.path("/storefeaturehttp");
		};




// .success its returning a list of objects the array of products
// .then returns the server information. the data. the price, image,  

		$scope.deleteProduct = function (cheapproduct){
			storefeaturehttpSvc.deleteProduct(cheapproduct).then(function (){
			$location.path("/storeFeaturehttp");
			});
			};
		
		$rootScope.$on("cheapproduct:added", function(){
			storefeaturehttpSvc.getCheapProducts().then(function (cheapproducts){
		$scope.cheapproducts = cheapproducts.data;
		});
	});	
		$rootScope.$on("cheapproduct:updated", function(){
		 storefeaturehttpSvc.getCheapProduct().then(function (cheapproducts){
		$scope.cheapproducts = cheapproducts.data;
		});
	});
		$rootScope.$on("cheapproduct:deleted", function(){
		 storefeaturehttpSvc.getCheapProduct().then(function (cheapproducts){
		$scope.cheapproducts = cheapproducts.data;
		});
	});

});





