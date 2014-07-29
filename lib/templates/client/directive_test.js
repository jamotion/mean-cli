'use strict';

describe('__class__Directive', function () {

    beforeEach(module('__pkgName__'));
    //Load the html template
    beforeEach(module('packages/__pkgName__/directives/__class__.html'));

    var scope, elm;

    beforeEach(inject(function ($rootScope, $compile) {

        elm = angular.element('<__class__-directive></__class__-directive>');
        scope = $rootScope.$new();
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should have empty content', function () {
        expect(elm.find('h1').text()).toBe('Example template of directive');
    });
});