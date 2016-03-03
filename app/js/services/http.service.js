(function() {
    'use strict';

angular.module('app')
    .factory('httpService', httpService);

    /* @ngInject */
    function httpService($q, $http, messageService, $state, config) {

        return {
            'getDatas': getDatas
        };
    
        function getDatas(method, url, datas) {
            var deferred = $q.defer(),
                // 主机名称，从配置中获取值
                host = config.host,
                // header上的token
                token = '';

            // 从localStorage中取出token
            if(window.localStorage.getItem('token') != null && window.localStorage.getItem('token') !== '') {
                token = window.localStorage.getItem('token');
            }

            // http请求
            $http({
                method: method, 
              　　url: host + url,
                data: datas,
              　　headers: {'x-access-token': token}
            })
            .success(function(response) {
                if(response.status) {
                    deferred.resolve(response);
                } else {
                    if(response.errMsg != null && response.errMsg !== '') {
                        messageService.show(response.errMsg);
                    }
                }
            })
            .error(function(data, status){
                if(status === 401) {
                    $state.go('signin');
                } else if (status === 404) {
                    // $state.go('404');
                } else {
                    messageService.show('服务器请求失败');
                }
            });
            return deferred.promise;
        };      

    };

})();