requirejs.config({

    baseUrl: "/",

    paths: {

        'angular': 'components/angular/angular',

        'angularRoute': 'components/angular-route/angular-route',

        'app': 'js/app',

        'pageController': 'js/controllers/pageController',

        'helloController': 'js/controllers/helloController',

        'cartController': 'js/controllers/cartController',

        'hideAndShowController': 'js/controllers/hideAndShowController',

        'userInfoService': 'js/service/userInfoService',

        'titleCaseFilter': 'js/filter/titleCaseFilter',

        'listController': 'js/controllers/listController',

        'detailController': 'js/controllers/detailController',

        'route': 'js/route'

    },

    shim: {

        'angular': {
            exports: 'angular'
        },

        'angularRoute': {
            deps: ['angular']
        }

    },

    urlArgs: "r=" + (new Date()).getTime()

    //deps:['angular','app']

});

require(['angular', 'app', 'pageController',
    'helloController', 'cartController',
    'hideAndShowController',
    'route'
], function(angular) {

    angular.bootstrap(document, ['AngularApp']);

});
