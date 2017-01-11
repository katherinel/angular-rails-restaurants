(function(){
	restauranteur = angular.module('restauranteur', ['ui.router']);
	console.log('angular routes');

	restauranteur.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	  console.log('restauranteur config');
	  $stateProvider
	    .state('home', {
	      url: '/restaurants',
	      templateUrl: '../templates/restaurants/index.html',
	      controller: 'RestaurantIndexCtrl'
	    });

	  $urlRouterProvider.otherwise('home');
	}]);

}).call(this);