(function() {
    function Room($firebaseArray) {
        /*
        * @desc object to be returned with room values and functions
        * @type {Object}
        */
        var Room = {};
        
        /*
        * @desc Firebase reference to Firebase database root URL
        * @type {Object}
        */
        var firebaseRef = firebase.database().ref()
        
        /*
        * @desc firebaseArray object containing all chat rooms objects
        * @type {Object}
        */
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        /*
        * @desc firebaseArray containing all chat room objects
        * @type {Object}
        */
        Room.all = rooms;
        
        /*
        * @function Room.add()
        * @desc adds a chat room to the firebase database's chat room node
        * @params {Object} newRoom
        */
        Room.add = function(newRoomName) {
            if (typeof newRoomName === "string") {
                rooms.$add({name: newRoomName});
            } else {
                console.log(typeof newRoomName);
                console.log(newRoomName);
            }
        };
        
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();