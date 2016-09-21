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
        
        ctrl.keyup = function(event) {
            console.log(event);
            if (event.keyCode === 13) { ctrl.ok() }
        }
    }
    
    angular
        .module('awkwardAssist')
        .controller('SetCurrentUserModalCtrl', ['$uibModalInstance', '$rootScope', SetCurrentUserModalCtrl]);
})();