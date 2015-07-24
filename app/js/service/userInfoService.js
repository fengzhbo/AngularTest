define(['app'], function(app) {

    app.factory('UserInfo', function() {

        var userInfo = {
            'name': 'feng',
            'age': 100
        };

        return {
            getName: function() {
                return userInfo.name;
            },
            getAge: function() {
                return userInfo.age;
            }
        };
    });
});
