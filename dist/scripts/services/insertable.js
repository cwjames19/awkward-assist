(function() {
    function Insertable($firebaseArray, Fixture) {
        
                /*
        * @desc = instance of SmackTalk to be returned
        * @type = Object
        */
        var Insertable = {};
        
        var currentInsertable;
        
        /*
         * @function getExclusions()
         * @desc get recent strings inserted to create
         * list of exclusions
         * @params ref, Firebase reference to current
         * chatroom
         * @return Array? FirebaseArray?
        */
        var getExclusions = function(array) {
            var exclusions = [];
            for(var i = 0; array[i]; i += 1) {
                exclusions.push(array[i].index);
            }
            return exclusions;
        }
        
        /*
         * @ function pushIndex()
         * @desc push the index of the string passed
         * to InsertableCtrl to the top of the
         * smackTalk exclusions list
         * @params stringIndex, Number
         * @return none
        */
        var pushIndex = function(roomId, stringIndex) {
            currentInsertable.reference.push({roomId: roomId, index: stringIndex});
        };
        
        var selectString = function(exclusions) {
                available_strings = currentInsertable.library.filter(
                function(value, index) {
                    return exclusions.includes(index) === false;
                }
            );
            return available_strings[Math.floor(Math.random() * available_strings.length)];
        }
        
        Insertable.getInsertable = function(string, roomId) {
            currentInsertable = Fixture.getInsertable(string);
            
            var exclusionsPromise = $firebaseArray(currentInsertable.reference.orderByChild('roomId').equalTo(roomId).limitToLast(Math.floor(currentInsertable.library.length * 0.66)));
            
            return exclusionsPromise.$loaded()
                .then( function(array) {            
                    var string = selectString(getExclusions(array));
                    pushIndex(roomId, currentInsertable.library.indexOf(string));
                    return string;
                }, function(error) {
                    console.error("An issue was encountered: ", error);
                });
        };
        
        return Insertable;
    }
    
    angular
        .module('awkwardAssist')
        .service('Insertable', ['$firebaseArray', 'Fixture', Insertable]);
})();