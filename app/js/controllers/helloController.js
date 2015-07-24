define(['app','userInfoService','titleCaseFilter'], function(app) {

    app.controller('HelloController', ['$scope', 'UserInfo', function($scope, userinfo) {

        $scope.greeting = {
            "text": "hello hello hello hello hello",
            "userName": userinfo.getName()
        };

    }]);
});
