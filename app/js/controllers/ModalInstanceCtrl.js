(function() {
    'use strict';

angular.module('app')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    function ModalInstanceCtrl($uibModalInstance) {
        function deleteOk(deleteId) {
            $uibModalInstance.close(function(){
                console.log('delete'+ deleteId);
            });
        }
        function deleteCancel() {
            $uibModalInstance.dismiss('cancel');
        }

    };

})();
