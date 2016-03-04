(function() {
    'use strict';

angular.module('app')
    .controller('signinCtrl', signinCtrl);

    function signinCtrl($scope, validateService, $state, httpService, config, $http) {
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
            	console.log(resultsDatas);
                httpService.getDatas('GET', '/backend/access/login/' + resultsDatas.userName +'/' + resultsDatas.password)
                .then(function(data) {
                    window.localStorage.token = data.token;
                    window.localStorage.userName = resultsDatas.userName;
                    $state.go('admin.vip-list');
                });
                
            }
        }
    };

})();
