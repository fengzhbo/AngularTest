define(['app'],function(app){
	app.controller('HideAndShowController', ['$scope', function($scope){

		$scope.thisDivShow = true;

		$scope.hide = function(){
			$scope.thisDivShow = false;
		}

		$scope.show = function(){
			$scope.thisDivShow = true;
		}
		
	}])
});