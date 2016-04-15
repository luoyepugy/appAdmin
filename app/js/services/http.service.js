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
                token = '',
                // 请求的信息
                req;  

            // 从localStorage中取出token
            if(window.localStorage.getItem('token') != null && window.localStorage.getItem('token') !== '') {
                token = window.localStorage.getItem('token');
            }

            // 请求的信息,默认为post请求
            if(method === 'POST') {
                req = {
                    method: 'POST',
                    url: host + url,
                    headers: {'x-app-version': '0.0.1', 'x-access-token': token},
                    data: datas
                }; 
            } else if(method === 'GET') {
                // get方式请求路径，将参数连接起来
                var getUrl = host + url;
                if(datas != null && datas != '') {
                    for(var i in datas) {
                        getUrl += '/' + datas[i]; 
                    }
                }
                req = {
                    method: 'GET',
                    url: getUrl,
                    headers: {'x-app-version': '0.0.1', 'x-access-token': token}
                    // params: datas
                };
            }

            // http请求
            $http(req)
            .success(function(response,status) {
                if(response.status) {
                    deferred.resolve(response);
                } else {
                    if(response.errMsg != null && response.errMsg !== '') {
                        messageService.show(response.errMsg);
                    }
                }
            })
            .error(function(error, status){
                // console.log(status);
                if(status === 401) {
                    $state.go('signin');
                } else if (status === 403) {

                } else {
                    messageService.show('服务器请求失败');
                }
            });
            return deferred.promise;
        };      

    };

})();