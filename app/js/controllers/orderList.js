(function() {
    'use strict';

var deleteId;

angular.module('app')
  .controller('orderListCtrl', orderListCtrl);

  	function orderListCtrl(httpService, $uibModal, $log) {
	  	var vm = this;

	  	var userUrl = '/backend/order';

	  	vm.deleteUser = deleteUser;
	  	vm.pageChange = pageChange;

	  	vm.pagination = {
	  		maxSize: 5,
	  		bigTotalItems: 15,
	  		bigCurrentPage: 1
	  	};

	  	load();
	  	// 页面加载
	  	function load() {
	  		httpService.getDatas('GET', userUrl + '/findOrders')
	  		.then(function(data) {
	  			vm.orderList = data.data;
	  		});
	  	}

	  	// 分页
	  	function pageChange () {
	  		console.log('page' + vm.pagination.bigCurrentPage);
	  	}
	  	
	  	// 删除用户
	  	function deleteUser(id) {
	  		deleteId = id;

		    var modalInstance = $uibModal.open({
		        animation: true,
		        templateUrl: 'myModalContent.html',
		        controller: 'ModalInstanceCtrl',
		        size: 'sm',
		        resolve: {
			        items: function () {
			          return id;
			        }
			    }
		    });
		    modalInstance.result.then(function (deleteId) {
		        console.log(deleteId);
		    }, function () {
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
            $uibModalInstance.close(deleteId);
        }
        function deleteCancel() {
            $uibModalInstance.dismiss('deleteCancel');
        }

    };

})();