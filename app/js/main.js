requirejs.config({

    baseUrl: "/",

    paths: {

        'angular': 'components/angular/angular',

        'app': 'js/app',

        'pageController': 'js/controllers/pageController',

        'helloController': 'js/controllers/helloController',
        
        'cartController': 'js/controllers/cartController'

    },

    shim: {

        'angular': {
            exports: 'angular'
        }

    },

    urlArgs: "r=" + (new Date()).getTime()

    //deps:['angular','app']

});

require(['angular', 'app', 'pageController', 'helloController', 'cartController'], function(angular) {

    angular.bootstrap(document, ['AngularApp']);

});
