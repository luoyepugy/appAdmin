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
        
        function show(tips, type) {
            var alertType = type || false;
            if($('.alert').length < 1) {
                if(alertType) {
                    $('.messageBox').prepend('<div class="alert alert-success" role="alert">' + tips +'</div>');
                } else {
                    $('.messageBox').prepend('<div class="alert alert-danger" role="alert">' + tips +'</div>');
                }
                $timeout(function(){
                    $('.alert').remove();
                }, 5000);
            }
        };
    };
        

})();