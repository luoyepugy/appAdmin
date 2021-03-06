(function() {
    'use strict';

angular.module('app')
    .directive('backButton', backButton);

    /* @ngInject */
    function backButton($window) {

        var directive = {
            restrict: 'AE',
            link: link
        };
        return directive;

        function link(scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        };
    };

})();