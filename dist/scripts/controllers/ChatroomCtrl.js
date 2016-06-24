(function() {
    
    function ChatroomCtrl($rootScope, $scope, $firebaseArray, $uibModal, $cookies, Message) {
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
            $("section.chatroom-messages-container").scrollTop($("div.chatroom-message:last").position().top);
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
        ctrl.newMessageContent;
        
        /*
        * @function ctrl.setActiveRoom
        * @desc sets a chatroom as the active room for loading and posting new messages
        * @params {Object} a room object
        */
        ctrl.setActiveRoom = function(room) {
            ctrl.activeRoom = room;
            ctrl.activeRoomMessages = $firebaseArray(messageRef.orderByChild("roomId").equalTo(ctrl.activeRoom.$id));
            setTimeout(scrollToBottom, 50);
            document.getElementById("footer-text-input").focus();
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
            }, function(reason) {
                console.log("The reason for dismissing the modal was: " + reason);
            });
        }
        
        /*
        * @function ctrl.addMessage
        * @desc adds amessage to our firebase database
        * @params content {String} content of message
        */
        ctrl.addMessage = function(content) {
            Message.add(content, ctrl.activeRoom.$id);
            chatroomContainer = $(".chatroom-messages-container");
            setTimeout(function() {
                containerHeight = document.querySelector(".chatroom-messages-container").scrollHeight;
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
            ctrl.setActiveRoom(newRoom);
        });
    }
    
    angular
        .module('awkwardAssist')
        .controller('ChatroomCtrl', ['$rootScope', '$scope', '$firebaseArray', '$uibModal', '$cookies', 'Message', ChatroomCtrl]);
})();