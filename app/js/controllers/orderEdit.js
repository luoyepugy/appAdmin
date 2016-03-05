(function() {
    'use strict';


angular.module('app')
    .controller('orderEditCtrl', orderEditCtrl);
    
    function orderEditCtrl(httpService, $stateParams) {
        var vm = this;

        var orderUrl = '/backend/order',
            id = $stateParams.orderId;

        vm.orderDetail = {};

        load();

        // 初次加载
        function load() {
            // 获取订单详情
            httpService.getDatas('GET', orderUrl + '/getOrder/' + id)
            .then(function(data) {
                vm.orderDetail = data.data; 
                // 将订单状态进行整理
                if(vm.orderDetail.state == '报价') {
                    vm.orderDetail.stateSets = [{'value': '报价'}, {'value': '已关闭'}];
                } else if(vm.orderDetail.state == '已发货') {
                    vm.orderDetail.stateSets = [{'value': '已发货'}, {'value': '已完成'}];
                } else if(vm.orderDetail.state == '待支付') {
                    vm.orderDetail.stateSets = [{'value': '待支付'}, {'value': '已关闭'}];
                } else {
                    vm.orderDetail.stateSets = [{'value': vm.orderDetail.state}];
                }
                vm.orderDetail.state = vm.orderDetail.stateSets[0];
            });
        }
        

    };

})();
