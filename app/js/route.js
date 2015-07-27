define(['app','listController','detailController'],function(app){

	app.config(['$routeProvider',function($route){

		$route.when('/',{
			controller:'ListController',
			templateUrl:'js/template/list.html'
		}).when('/view/:id',{
			controller:'DetailController',
			templateUrl:'js/template/message.html'
		}).otherwise({
			redirecto:'/'
		});

	}]);


});