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
  .controller('vipListCtrl', vipListCtrl);

  	function vipListCtrl() {
	  	var vm = this;

	  	vm.vipList = [
		  	{'phone': '13008885781', 'isLocked': true, 'time': '2015-01-03'},
		  	{'phone': '13008885781', 'isLocked': true, 'time': '2015-01-03'},
		  	{'phone': '13008885781', 'isLocked': false, 'time': '2015-01-03'}
	  	];
  	};

})();
