(function() {
    'use strict';


angular.module('app')
  .controller('orderOfferListCtrl', orderOfferListCtrl);

    function orderOfferListCtrl(httpService, $uibModal, $log, $stateParams) {
        var vm = this;

        var orderUrl = '/backend/order',
            id = $stateParams.orderId;

        vm.deleteOffer = deleteOffer;

        load();
        // 页面加载
        function load() {
            httpService.getDatas('GET', orderUrl + '/getQuotations/' + id)
            .then(function(data) {
                vm.orderOfferList = data.data;
            });
        }

        // 删除用户
        function deleteOffer(deleteId, deleteIndex) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm'
            });
            modalInstance.result.then(function () {
                // 删除操作
                httpService.getDatas('POST', orderUrl + '/removeQuotation', {'quotationId': deleteId})
                .then(function() {
                    vm.orderOfferList.splice(deleteIndex,1);
                });
            }, function () {
                // console.log(deleteId + '/' + deleteIndex);
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    };


// 删除的模态框Controller
angular.module('app')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    function ModalInstanceCtrl($uibModalInstance, $scope) {

        $scope.deleteOk = deleteOk;
        $scope.deleteCancel = deleteCancel;

        function deleteOk() {
            $uibModalInstance.close('deleteOk');
        }
        function deleteCancel() {
            $uibModalInstance.dismiss('deleteCancel');
        }

    };

})();