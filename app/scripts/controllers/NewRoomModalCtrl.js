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
        
        ctrl.keyup = function(event) {
            if (event.keyCode === 13) {ctrl.ok()};
        };
    }
    
    angular
        .module('awkwardAssist')
        .controller('NewRoomModalCtrl', ['$uibModalInstance', NewRoomModalCtrl]);
})();