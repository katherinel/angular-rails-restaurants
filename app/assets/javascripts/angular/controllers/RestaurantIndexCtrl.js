(function () {
	console.log('load restauranteur controller');
	restauranteur.controller('RestaurantIndexCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
	  console.log('inside restauranteur controller');
	  $scope.restaurants = [];
	  $http.get('./restaurants.json')
		  .then(
		  	function(success) {
		    	$scope.restaurants = success.data;
		  	},
		  	function (error){
	     	}
	    );
	}]);
}).call(this);