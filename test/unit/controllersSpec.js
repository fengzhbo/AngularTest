'use strict';

describe('angularApp controllers', function() {

    describe('PageController', function() {

        beforeEach(module('AngularApp'));

        it('测试PageController的数据', inject(function($controller) {

            var scope = {},
                ctrl = $controller('PageController', {
                    $scope: scope
                });

            expect(scope.qty).toEqual(1);

        }));


    });

});
