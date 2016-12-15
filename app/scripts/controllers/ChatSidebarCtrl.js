(function() {
    function ChatSidebarCtrl($rootScope, $uibModal, Room, $scope) {
        
        /*
        * @desc creating an alias for the controller's this object
        * @type {Object} this object
        */
        var ctrl = this;
        
        /*
        * @desc local singleton of the Room service
        * @type {Object} instance of the Rooms ervice
        */
        ctrl.rooms = Room.all;
        
        /*
        * @function this.openNewRoomModal()
        * @desc create and open a modal that will be used to create a new room
        * @params none
        */
        ctrl.openNewRoomModal = function() {
            
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: "/templates/newRoomModal.html",
                controller: "NewRoomModalCtrl as newRoomModal"
            });
            
            modalInstance.result.then( function(newName) {
                Room.add(newName);
            }, function(reason) {
                console.log("Modal dismissed on " + new Date() + " because: " + reason);
            });
        };
        
        /*
        * @function ctrl.selectActiveRoom
        * @desc select a chatroom to become the active chatroom
        * @param {Object} room object
        * @return {Object} event object broadcasted to scope of method call
        */
        ctrl.selectActiveRoom = function(room) {
            $rootScope.$broadcast('changeActiveRoom', room);
        };
        
    }
    
    angular
        .module('awkwardAssist')
        .controller('ChatSidebarCtrl', ['$rootScope', '$uibModal', 'Room', '$scope', ChatSidebarCtrl]);
})();