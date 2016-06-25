(function() {
    function awkwardAssistCookies($rootScope, $cookies, $uibModal, $window, $uibModalInstance) {
        var modalController = function($uibModalInstance, $rootScope) {
            /*
            * @desc alias for controller's this object
            * @type {Object} this Object
            */
            var ctrl = this;
            
            ctrl.username = "";
            
            ctrl.ok = function() {
                $uibModalInstance.close(ctrl.username);
            };
        };
        
        modalController.$inject = ['$uibModalInstance', '$rootScope'];
        
        function openModal() {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: "templates/bootstrapCurrentUserModal.html",
                controller: modalController,
                controllerAs: "setCurrentUserModal"
            });
            
            modalInstance.result.then(function(username)
            {
                if (username === "") {
                    tryAgain();
                } else {
                    $cookies.put("awkwardAssistCurrentUser", username);
                    console.log("Current Cookie: " + $cookies.get("awkwardAssistCurrentUser"));
                    $rootScope.username = username;
                }
            }, function(reason) {
                console.log("Modal dismissed somehow... Here's the reason why: " + reason);
                tryAgain();
            });
            
            function tryAgain() {
                $window.alert("You must enter a username to access the chatrooms.");
                openModal();
            }
        }
        
        if (!$cookies.get("awkwardAssistCurrentUser") || $cookies.get("awkwardAssistCurrentUser") === '') {
            openModal();
        }
    }
    
    angular
        .module('awkwardAssist')
        .run(['$rootScope', '$cookies', '$uibModal', '$window', awkwardAssistCookies]);
})();