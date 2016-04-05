(function() {
    'use strict';

angular.module('app')
    .controller('signinCtrl', signinCtrl);

    function signinCtrl($scope, validateService, $state, httpService, config, $http) {
        var vm = this;

        vm.submit = submit;

        function submit($event) {
            if($event.keyCode == 13) {
                angular.element('#button').trigger('click');
            }
        }
    };

})();