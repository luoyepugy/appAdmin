(function() {
    'use strict';


angular.module('app')
  .controller('authListEdit', authListEdit);

  	function authListEdit(httpService) {
	  	var vm = this;

	  	// var userUrl = '/backend/user';

	  	// vm.pageChange = pageChange;

	  	// vm.pagination = {
	  	// 	maxSize: 5,
	  	// 	bigTotalItems: 15,
	  	// 	bigCurrentPage: 1
	  	// };

	  	load();
	  	// 页面加载
	  	function load() {
	  		// httpService.getDatas('GET', userUrl + '/findAll')
	  		// .then(function(data) {
	  		// 	vm.authListEdit = data.data;
	  		// });
	  	}

	  	// 分页
	  	function pageChange () {
	  		// console.log('page' + vm.pagination.bigCurrentPage);
	  	}

  	};

})();