(function() {
    function SmackTalk($firebaseArray) {
        
                /*
        * @desc = instance of SmackTalk to be returned
        * @type = Object
        */
        var SmackTalk = {};
        
        var firebaseRef = firebase.database().ref();
        
        /*
        * @desc An array of all strings of smack talk messages
        * @type Object(Array)
        */
        var library = ["Your hair looks STUPID.", "You loook like you fell off the ugly tree and hit every branch on the way down.", "Your mother was a hamster and your father smelled of elderberries.", "Has anyone ever told you that you look like a partially full burlap sack with a face drawn on it?", "You know the saying, 'you are what you eat'? What the hell did you eat?!", "Your face looks like it caught fire and someone put it out with a hammer.", "Your face makes onions cry.", "You are the reason they put instructions on shampoo", "Every enemy I've met, I've annihilated.", "You suck more than a suck machine set on 'suck a lot'", "You look like I need a drink.", "If I had a dollar for every brain you don't have, I'd have ONE dollar.", "I'd agree with you but then we'd both be wrong.", "The jerk store called and they're all out of you.", "You think you're too cool for school but I got a newsflash for you, Walter Cronkite. You aren't.", "Hold that thought real quick, let me turn on the part of my brain that cares.", "Shut up, idiot head face.", "I'm about to school you like fish.", "Did you hear the bell ring? Some one is about to get served.", "Just shut up and have my fries ready at the window.", "If my dog's butt looked like your face, my dog would look like a normal dog."];
        
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
        var getExclusions = function(roomId) {
            var exclusions = [];
            try {
                var array = $firebaseArray(smackTalkRef.orderByChild('roomId').equalTo(roomId).limitToLast(exclusionLimit));
                
                array.$loaded( function(arrLoad) {
                    var i = 0;
                    while (arrLoad[i]) {
                        console.log(i);
                        console.log(exclusions);
                        exclusions.push(arrLoad[i].index);
                        console.log(exclusions);
                        i += 1;
                    }
                    return exclusions;
                }, function(error) {
                    console.log("Error: " + error);
                });
            }
            catch(err) {
                console.log("Error: " + error);
            }
        };
        
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
        
        var retrieve = function(exclusions) {
            console.log("inside retrieve function; exclusions value: " + exclusions);
            console.log(typeof exclusions);
            console.log(exclusions.length);
            
            available_insertables = library.filter(
                function(value, index) {
                    return exclusions.includes(index) === false;
                }
            );
            return available_insertables[Math.floor(Math.random() * available_insertables.length)];
        }
        
        SmackTalk.getSmackTalk = function(roomId) {
            smackTalkRoomRef = firebaseRef.child('smackTalk').child(roomId);
            exclusions = getExclusions();
            string = select(exclusions);
            stringIndex = library.indexOf(string);
//            pushIndex(roomRef.smackTalk)
            smackTalkRoomRef = undefined;
            return {
                    string: string,
                    index: stringIndex
                   }
        }
        
        SmackTalk.getSmackTalkTest = function(roomId) {
            console.log("In the SmackTalk service's getSmackTalkTest method");
            console.log(getExclusions(roomId));
            var exclusions = getExclusions(roomId);
            // wrap with promise
                console.log("Exclusions: " + exclusions);
                console.log(exclusions.length);
                var string = retrieve(exclusions);
                console.log(string);
                pushIndex(roomId, library.indexOf(string));
                return string;
            // wrap with promise
        };
        
        return SmackTalk;
    }
    
    angular
        .module('awkwardAssist')
        .service('SmackTalk', ['$firebaseArray', SmackTalk]);
})();