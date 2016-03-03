(function() {
    'use strict';

angular.module('app')
    .controller('signinCtrl', signinCtrl);

    function signinCtrl($scope, validateService, $state, httpService) {
        var vm = this;

        vm.formData = {};
        vm.signin = signin;

        function signin() {
        	var resultsIsEmpty = validateService.isEmpty('.j-signinForm');
            if(!resultsIsEmpty) {
                return false;
            }

            // 提交表单数据
            var resultsDatas = validateService.submitData('.j-signinForm');
            if(resultsDatas) {
            	// console.log(resultsDatas);
                httpService.getDatas('GET', '/backend/access/login/:' + resultsDatas.userName +'/:' + resultsDatas.password)
                .then(function(data) {
                    $state.go('admin.vip-list');
                    window.localStorage.token = data.token;
                    window.localStorage.userName = resultsDatas.userName;
                });
                
            }
        }
    };

})();
