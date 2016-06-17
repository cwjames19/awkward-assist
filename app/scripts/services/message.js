(function() {
    function Message($rootScope, $firebaseArray) {
        /*
        * @desc object to be returned to calling component
        * @type {Object}
        */
        var Message = {};
        
        /*
        * @desc Firebase reference to root node of Firebase database for this application
        * @type {Object} Firebase Reference
        */
        var firebaseRef = firebase.database().ref();
        
        /*
        * @desc firebase array of all messages
        * @type Array-like {Object} firebaseArray object instance
        */
        var messages = $firebaseArray(firebaseRef.child('messages'));
        
        /*
        * @desc $firebaseArray of all messages
        * @type Array-like {Object} $firebaseArray object
        */
        Message.all = messages;
        
        /*
        * @function Messages.add()
        * @desc pushes an object to the end of the $firebaseArray of all messages
        * @params {Object} Message
        */
        Message.add = function(text, roomId) {
            if (text !== "") {
                var newMessage = {
                    username: $rootScope.username,
                    content: text,
                    sentAt: firebase.database.ServerValue.TIMESTAMP,
                    roomId: roomId
                };
                messages.$add(newMessage);
            }
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory("Message", ["$rootScope", "$firebaseArray", Message]);
})();