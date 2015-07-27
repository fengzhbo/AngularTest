define(['app'], function(app) {

    app.controller('DetailController', ['$scope', '$routeParams', function($scope, $params) {

        $scope.message = {
            id: $params.id,
            sender: 'feng',
            title: 'test1111',
            sendTime: '2015-07-29',
            content:'hello,nice to meet you.'
        };

    }]);

});
