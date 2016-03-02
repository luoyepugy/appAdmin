(function() {
    'use strict';

angular.module('app')
    .factory('messageService', messageService);

    /* @ngInject */
    function messageService($rootScope, $timeout) {

        var messages = {
            'show': show
        };
        return messages;
        
        function show(tips) {           
            if($('.alert-danger').length < 1) {
                $('body').append('<div class="alert alert-danger" role="alert">' + tips +'</div>');
                $timeout(function(){
                    $('.alert-danger').remove();
                }, 3000);
            }
        };
    };
        

})();