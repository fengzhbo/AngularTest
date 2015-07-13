requirejs.config({

    baseUrl: "/",

    paths: {

        'angular': 'components/angular/angular',

        'app': 'js/app',

        'pageController': 'js/controllers/pageController'

    },

    shim: {

        'angular': {
            exports: 'angular'
        }

    },

    urlArgs: "r=" + (new Date()).getTime()

    //deps:['angular','app']

});

require(['angular', 'app', 'pageController'], function(angular) {

    angular.bootstrap(document, ['AngularApp']);

});
