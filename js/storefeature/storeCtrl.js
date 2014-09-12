angular.module("storeFeature")
	.controller("storeCtrl", function ($rootScope, $scope, $location, $routeParams, storeSvc){

		$scope.luxuryproducts = storeSvc.getProducts();

		// $scope.theProduct = storeSvc.findProductByIdx($routeParams.id);
  //       console.log($scope.theProduct);



        $scope.singleProduct = storeSvc.findIndex($routeParams.id);

        

		$scope.goToAdd = function (){
			$location.path("/luxproductview/add");
		};

		

		$scope.addProducts = function (newProduct){
			storeSvc.addProducts(newProduct);

			$location.path("/luxproductview");
		};

		$scope.removeProduct = function (idx){
			storeSvc.deleteProducts(idx);
		};

		$scope.editProducts = function( idx, luxuryproduct){
			storeSvc.editProducts(idx, luxuryproduct);

			$location.path("/luxproductview")
		};

	});