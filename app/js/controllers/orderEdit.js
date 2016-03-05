(function() {
    'use strict';


angular.module('app')
    .controller('orderEditCtrl', orderEditCtrl);
    
    function orderEditCtrl(httpService, $stateParams) {
        var vm = this;

        var orderUrl = '/backend/order',
            id = $stateParams.orderId;

        load();

        // 初次加载
        function load() {
            httpService.getDatas('GET', orderUrl + '/getQuotations/' + id)
            .then(function(data) {
                vm.orderDetail = data.data;
            });
        }
        

    };

})();
