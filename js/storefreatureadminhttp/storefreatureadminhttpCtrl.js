angular.module("storeFreatureadminhttp")
	.controller("storefreatureadminhttpCtrl", function ( $scope, $log, $location, $rootScope, $routeParams, storefreatureadminhttpSvc, storefeaturehttpSvc) {

	storefeaturehttpSvc.getcheapProducts().then(function (cheapproducts) {
  	 $scope.cheapproducts = cheapproducts.data;
  	 $log.info(cheapproducts);
  });

  storefeaturehttpSvc.getcheapProduct($routeParams.id).success(function (response) {
  	$scope.singleProduct = response.data;
  	$log.info(response.data);
  });

	storefreatureadminhttpSvc.getBags().then(function (bags){
		$scope.bags = bags.data;
		$log.info(bags);
	})

	storefreatureadminhttpSvc.getBag($routeParams.id).then(function (response){
		$scope.singleBag = response.data;
		$log.info(response);
	});


	$scope.addBag = function (bag) {
		var orderBag = {

			quantity : bag.quantity,
			designer: bag.designer,
			price: bag.price,
			image: bag.image,
			description: bag.description,
			link: bag.link
		}

		storefreatureadminhttpSvc.addBag(orderBag).success(function (){
			$location.path("/storefeaturehttp")
		});
	};	

	$scope.addbagReview = function (review){

		storefeaturehttpSvc.getcheapProducts($routeParams.id).success(function (cheapproduct){

		
		$scope.singleProduct = cheapproduct;
		$log.info($scope.singleProduct);
		$scope.singleProduct.reviews.push({

			reviewDate: new Date(),
			reviewDescription: review.description,
			reviewCustomer: review.customer
			
			

		});


		storefeaturehttpSvc.addbagReview(cheapproduct);

		});
			$scope.review = {};

	};

	$scope.editBag = function (bag){
		storefreatureadminhttpSvc.updateBag(bag).then(function(){
		});
	};

	$scope.deleteBag = function (id){
		$log.info(id)
		storefreatureadminhttpSvc.deleteBag(id).then(function (){
			$location.path("/storefreatureadminhttp/luxbag");
		});
	};

	$rootScope.$on("bag:added", function (){
		storefreatureadminhttpSvc.getBags().then(function (bags){
			$scope.bags = bags.data;
		});
	});

	$rootScope.$on("bag:deleted", function(){
		storefreatureadminhttpSvc.getBags().then(function (bags){
			$scope.bags = bags.data;
			});

		});


	});





  



