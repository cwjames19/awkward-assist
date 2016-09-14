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
        var firebaseRef = firebase.database().ref();
        
        var smackTalkRef = firebaseRef.child('smackTalk');
        
        /*
        * @desc firebaseArray object containing all chat rooms objects
        * @type {Object}
        */
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        var addRoomToInsertables = function() {
            
        };
        
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
            }
            
            var newestRoomRef =  $firebaseArray(firebaseRef.child('rooms').limitToLast(1));
            var newestRoomKey;
            var smackTalkArray = $firebaseArray(firebaseRef.child('smackTalk'));
            smackTalkArray.$loaded( function(foo) {
                console.log("foo: " + foo);
                console.log(foo);
            }, function(error) {
                console.log("error: " + error); 
            });
            newestRoomRef.$loaded(
                function(foo) {
                    newestRoomKey = newestRoomRef.$keyAt(0);
                    console.log("newestRoomKey: " + newestRoomKey);
                    smackTalkArray.push({'${newestRoomKey}': { key: 'value'}});
                }, function(error) {
                    console.log("Error: " + error);
                });
        };
        
        //                    smackTalkRef.update(newestRoomKey: {"key": "value"});

        
        return Room;
    }
    
    angular
        .module('awkwardAssist')
        .factory('Room', ['$firebaseArray', Room]);
})();