define(['app'], function(app) {

    app.controller('PageController', ['$scope', function($scope) {


        $scope.qty = 1;
        $scope.cost = 2;

        $scope.pay = $scope.qty * $scope.cost;

        $scope.total = function () {
        	$scope.pay = $scope.qty * $scope.cost;
        };

        $scope.$watch('qty', function(newValue, oldValue, scope) {
        	$scope.total();	
        });

    }])

});
