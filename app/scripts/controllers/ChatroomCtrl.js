(function() {
    
    function ChatroomCtrl($rootScope, $scope, $firebaseArray, $uibModal, $cookies, Message, Insertable, SmackTalk) {
        /*
        * @desc alias for the controller's this object
        * @type {Object} 'this' object
        */
        var ctrl = this;
        
        /*
        * @desc reference to the firebase database's messages child
        * {Object} firebase reference
        */
        var messageRef = firebase.database().ref().child('messages');
        
        /*
        * @name scrollToBottom
        * @desc automatically scrolls to bottom of chatroom div
        * @ type {object} Function
        */
        var scrollToBottom = function() {
            var lastMessage = $("div.room-item:last");
            if (lastMessage.position() !== undefined) {
                $("section.room").scrollTop(lastMessage.position().top);
            }
        };
        
        /*
        * @desc currently active chat room
        * @type {Object} Chat room object
        */
        ctrl.activeRoom = null;
        
        /*
        * @desc an alias for the Message service
        * @type {Object} Service
        */
        ctrl.message = Message;
        
        /*
        * @desc Firebase database query of all messages associated with the active room
        * @type {Object} Firebase query
        */
        ctrl.activeRoomMessages;
        
        /*
        * @desc content of message to be sent
        * @type {String}
        */
        ctrl.newMessageContent = "";
        
        ctrl.activeUsername = $rootScope.username;
        
        
        
        /*
        * @function ctrl.setActiveRoom
        * @desc sets a chatroom as the active room for loading and posting new messages
        * @params {Object} a room object
        */
        ctrl.setActiveRoom = function(room) {
            ctrl.activeRoom = room;
            ctrl.activeRoomMessages = $firebaseArray(messageRef.orderByChild("roomId").equalTo(ctrl.activeRoom.$id));
            setTimeout(scrollToBottom, 50);
            document.getElementById("text-input").focus();
        };
        
        /*
        * @function ctrl.openSetCurrentUserModal
        * @desc open a modal to change the current username
        */
        ctrl.openSetCurrentUserModal = function() {
            
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: "templates/setCurrentUserModal.html",
                controller: "SetCurrentUserModalCtrl as setCurrentUserModal"
            });
            
            modalInstance.result.then(function(username) {
                $cookies.put("awkwardAssistCurrentUser", username);
                $rootScope.username = username;
                $rootScope.$broadcast('changeActiveRoom', ctrl.activeRoom)
            }, function(reason) {
                console.log("Modal dismissed on " + new Date() + " because: " + reason);
            });
        }
        
        /*
        * @function ctrl.addMessage
        * @desc adds amessage to our firebase database
        * @params content {String} content of message
        */
        ctrl.addMessage = function(content) {
            Message.add(content, ctrl.activeRoom.$id);
            chatroomContainer = $(".room");
            setTimeout(function() {
                containerHeight = document.querySelector(".room").scrollHeight;
                if (containerHeight - (chatroomContainer.scrollTop() + chatroomContainer.outerHeight()) < 400) {
                    scrollToBottom();
                };
            }, 20);
            ctrl.newMessageContent = "";
        }
        
        /*
        * listen for a change in chatroom selection
        */
        $scope.$on('changeActiveRoom', function(event, newRoom) {
            ctrl.activeUsername = $rootScope.username;
            ctrl.setActiveRoom(newRoom);
        });
    }
    
    angular
        .module('awkwardAssist')
        .controller('ChatroomCtrl', ['$rootScope', '$scope', '$firebaseArray', '$uibModal', '$cookies', 'Message', 'Insertable', ChatroomCtrl]);
})();