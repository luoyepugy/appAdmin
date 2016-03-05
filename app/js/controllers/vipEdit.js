(function() {
    'use strict';


angular.module('app')
    .controller('vipEditCtrl', vipEditCtrl);
    
    function vipEditCtrl(httpService, $stateParams) {
        var vm = this;

        var userUrl = '/backend/user',
            id = $stateParams.vipId;

        vm.vipDetail = {};

        load();

        // 初次加载
        function load() {
            httpService.getDatas('GET', userUrl + '/getById/' + id)
            .then(function(data) {
                vm.vipDetail = data.data;
            });
        }
        

    };

})();
