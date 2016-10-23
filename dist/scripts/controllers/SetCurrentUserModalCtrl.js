(function() {
    function SetCurrentUserModalCtrl($uibModalInstance, $window, $rootscope) {
        var ctrl = this;
        
        ctrl.username = "";
        
        ctrl.ok = function() {
            if (ctrl.username !== "") {
                $uibModalInstance.close(ctrl.username);
            } else {
                $window.alert("Username can not be blank.");
            }
        };
        
        ctrl.cancel = function() {
            $uibModalInstance.dismiss('Cancelled');
        }
        
        ctrl.keyup = function(event) {
            if (event.keyCode === 13) { ctrl.ok() }
        };
    }
    
    angular
        .module('awkwardAssist')
        .controller('SetCurrentUserModalCtrl', ['$uibModalInstance', '$window', '$rootScope', SetCurrentUserModalCtrl]);
})();