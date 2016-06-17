(function() {
    function SetCurrentUserModalCtrl($uibModalInstance) {
        var ctrl = this;
        
        ctrl.username = "";
        
        ctrl.ok = function() {
            $uibModalInstance.close(ctrl.username);
        };
        
        ctrl.cancel = function() {
            $uibModalInstance.dismiss('Cancelled');
        }
    }
    
    angular
        .module('blocChat')
        .controller('SetCurrentUserModalCtrl', ['$uibModalInstance', '$rootScope', SetCurrentUserModalCtrl]);
})();