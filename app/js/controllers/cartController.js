define(['app'], function(app) {

    app.controller('CartController', ['$scope', function($scope) {

        $scope.ShopCart = [{
            "name": "shop 1",
            "count": 10,
            "price": 12.8
        }, {
            "name": "shop 2",
            "count": 13,
            "price": 145.8
        }, {
            "name": "shop 3",
            "count": 30,
            "price": 9
        }];

        $scope.remove = function(index) {
            $scope.ShopCart.splice(index, 1);
        };

    }]);

});
