// var TEST_REGEXT = /(spec|test).js$/i;

// Object.keys(window.__karma__.files).forEach(function(file) {
//     if (TEST_REGEXT.test(file)) {
//         var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');

//         allTestFiles.push(normalizedTestModule);
//     };
// });

require(['base/app/js/main'], function() {
    requirejs.config({
        baseUrl: 'base/',

        paths: {
            'angularMocks': 'app/components/angular-mocks/angular-mocks'
        },

        shim: {
            'angularMocks': {
                deps: ['angular']
            }
        },

        deps: ['angularMocks'],

        callback: function() {

            var fileReg = /(spec|test).js$/i;
            var files = [];

            for (var file in window.__karma__.files) {
                if (window.__karma__.files.hasOwnProperty(file)) {
                    if (fileReg.test(file)) {
                        files.push(file);
                    };
                };
            }

            require(files, function() {
                window.__karma__.start();
            });


        }
    });
});
