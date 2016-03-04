(function() {
    'use strict';


angular.module('app')
  .controller('vipListCtrl', vipListCtrl);

  	function vipListCtrl(httpService) {
	  	var vm = this;

	  	var userUrl = '/backend/user';

	  	vm.pagination = {
	  		maxSize: 5,
	  		bigTotalItems: 15,
	  		bigCurrentPage: 1
	  	};

	  	httpService.getDatas('GET', userUrl + '/findAll')
	  		.then(function(data) {
	  			vm.vipList = data.data;
	  		});
  	};

})();
