(function() {
    'use strict';

/**
 * @ngdoc function
 * @name appAdminApp.controller:signinCtrl
 * @description
 * # signinCtrl
 * Controller of the appAdminApp
 */
angular.module('app')
    .controller('vipReviewCtrl', vipReviewCtrl);
    
    function vipReviewCtrl(httpService, $stateParams) {
        var vm = this;

        var userUrl = '/backend/user',
            id = $stateParams.reviewId;

        httpService.getDatas('GET', userUrl + '/getById/' + id)
            .then(function(data) {
                vm.vipDetail = data.data;
            });

    };

})();
