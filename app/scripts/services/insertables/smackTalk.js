(function() {
    function SmackTalk($firebaseArray) {
        
                /*
        * @desc = instance of SmackTalk to be returned
        * @type = Object
        */
        var SmackTalk = {};
                
        /*
        * @desc An array of all strings of smack talk messages
        * @type Object(Array)
        */
        var library = ["Your hair looks STUPID.", "You loook like you fell off the ugly tree and hit every branch on the way down.", "Your mother was a hamster and your father smelled of elderberries.", "Has anyone ever told you that you look like a partially full burlap sack with a face drawn on it?", "You know the saying, 'you are what you eat'? What the hell did you eat?!", "Your face looks like it caught fire and someone put it out with a hammer.", "Your face makes onions cry.", "You are the reason they put instructions on shampoo", "Every enemy I've met, I've annihilated.", "You suck more than a suck machine set on 'suck a lot'.", "You look like I need a drink.", "If I had a dollar for every brain you don't have, I'd have a dollar.", "I'd agree with you but then we'd both be wrong.", "The jerk store called and they're all out of you.", "You think you're too cool for school . Well I've got a newsflash for you, Walter Cronkite. You aren't.", "Hold that thought real quick, let me turn on the part of my brain that cares.", "Shut up, idiot head face.", "I'm about to school you like fish.", "Did you hear the bell ring? Some one is about to get served.", "Just shut up and have my fries ready at the window.", "If my dog's butt looked like your face, my dog would look like a normal dog."];
        
        var exclusionLimit = Math.floor(library.length * 0.66);
        
        var smackTalkRef = firebase.database().ref().child('smackTalk');
        
        /*
         * @function getExclusions()
         * @desc get recent strings inserted to create
         * list of exclusions
         * @params ref, Firebase reference to current
         * chatroom
         * @return Array? FirebaseArray?
        */
        
        /*
         * @ function pushIndex()
         * @desc push the index of the string passed
         * to InsertableCtrl to the top of the
         * smackTalk exclusions list
         * @params stringIndex, Number
         * @return none
        */
        var pushIndex = function(roomId, stringIndex) {
            smackTalkRef.push({roomId: roomId, index: stringIndex});
        };
        
        var retrieveInsertable = function(exclusions) {            
            available_insertables = library.filter(
                function(value, index) {
                    return exclusions.includes(index) === false;
                }
            );
            return available_insertables[Math.floor(Math.random() * available_insertables.length)];
        }
        
        SmackTalk.getSmackTalk = function(roomId) {
            var exclusionsPromise = $firebaseArray(smackTalkRef.orderByChild('roomId').equalTo(roomId).limitToLast(exclusionLimit));
            
            return exclusionsPromise.$loaded()
                .then( function(array) {
                    var exclusions = [];
                
                    for (var i = 0; array[i]; i += 1) {
                        exclusions.push(array[i].index);
                    }
                    var string = retrieveInsertable(exclusions);
                    pushIndex(roomId, library.indexOf(string));
                    return string;
                }, function(error) {
                    console.error("An issue was encountered: ", error);
                });
        };
        
        return SmackTalk;
    }
    
    angular
        .module('awkwardAssist')
        .service('SmackTalk', ['$firebaseArray', SmackTalk]);
})();