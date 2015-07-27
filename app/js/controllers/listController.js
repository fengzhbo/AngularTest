define(['app'], function(app) {

    app.controller('ListController', ['$scope','$http', function($scope,$http) {

    	$http.get('js/mockData/message.json').success(function(data,status,headers,config){
    		$scope.messages = data;
    	});

        // $scope.messages = [{
        //     id: 1,
        //     sender: 'feng',
        //     title: 'test1111',
        //     sendTime: '2015-07-29'
        // }, {
        //     id: 2,
        //     sender: 'feng',
        //     title: 'test1111',
        //     sendTime: '2015-07-29'
        // }];

    }]);

});
