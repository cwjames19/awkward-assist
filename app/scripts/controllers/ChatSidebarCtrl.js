(function() {
    function ChatSidebarCtrl($rootScope, $uibModal, Room, $scope, $state) {
        
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
        * @function ctrl.selectActiveRoom
        * @desc select a chatroom to become the active chatroom
        * @param {Object} room object
        * @return {Object} event object broadcasted to scope of method call
        */
        ctrl.selectActiveRoom = function(room) {
            console.log("In selectActiveRoom()");
            $state.go('root', {})
                .then( function() {
                    $rootScope.$broadcast('changeActiveRoom', room);
                });
        };
        
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
                Room.add(newName)
                    .then(function(ref) {
                        ctrl.selectActiveRoom(Room.all.$getRecord(ref.key));
                    });
            }, function(reason) {
                console.log("Modal dismissed on " + new Date() + " because: " + reason);
            });
        };
        
    }
    
    angular
        .module('awkwardAssist')
        .controller('ChatSidebarCtrl', ['$rootScope', '$uibModal', 'Room', '$scope', '$state', ChatSidebarCtrl]);
})();