(function() {
    function NewRoomModalCtrl($uibModalInstance) {
        var ctrl = this;
        
        ctrl.name = "";
        
        ctrl.ok = function() {
            $uibModalInstance.close(ctrl.name);
        };
        
        ctrl.cancel = function() {
            $uibModalInstance.dismiss('Cancelled');
        };
    }
    
    angular
        .module('blocChat')
        .controller('NewRoomModalCtrl', ['$uibModalInstance', NewRoomModalCtrl]);
})();