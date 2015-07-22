define(['app'], function(app) {
    app.controller('HelloController', ['$scope', function($scope) {

        $scope.greeting = {
            "text": "hello"
        };

    }]);
});
