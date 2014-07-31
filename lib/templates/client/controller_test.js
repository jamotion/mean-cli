'use strict';

describe('__class__Controller', function () {
    var scope, _$location, createController;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
            $location = _$location_;
            scope = $rootScope.$new();

            createController = function () {
                return $controller('__class__Controller', {
                    '$scope': scope
                });
            };
        }
    ));

    it('should ...', function () {
        var controller = createController();
        $location.path('/__pkgName__');
        expect($location.path()).toBe('/__pkgName__');
    });
});