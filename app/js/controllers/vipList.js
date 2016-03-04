(function() {
    'use strict';


angular.module('app')
  .controller('vipListCtrl', vipListCtrl);

  	function vipListCtrl(httpService, $uibModal, $uibModalInstance) {
	  	var vm = this;

	  	var userUrl = '/backend/user';

	  	vm.deleteUser = deleteUser;
	  	vm.deleteOk = deleteOk;
	  	vm.deleteCancel = deleteCancel;

	  	vm.pagination = {
	  		maxSize: 5,
	  		bigTotalItems: 15,
	  		bigCurrentPage: 1
	  	};

	  	httpService.getDatas('GET', userUrl + '/findAll')
	  		.then(function(data) {
	  			vm.vipList = data.data;
	  		});

	  	function deleteUser(id) {
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
		    modalInstance.result.then(function (id) {
		      // $scope.selected = selectedItem;
		      console.log('id');
		    }, function () {
		      // $log.info('Modal dismissed at: ' + new Date());
		      console.log('aaa');
		    });
		};

  	};

})();
