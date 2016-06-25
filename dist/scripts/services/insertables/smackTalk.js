(function() {
    function SmackTalk() {
        
        /*
        * @desc An array of all strings of smack talk messages
        * @type Object(Array)
        */
        var all = ["Your hair looks STUPID.", "You loook like you fell off the ugly tree and hit every branch on the way down.", "Your mother was a hamster and your father smelled of elderberries.", "Has anyone ever told you that you look like a partially full burlap sack with a face drawn on it?", "You know the saying, 'you are what you eat'? What the hell did you eat?!", "Your face looks like it caught fire and someone put it out with a hammer.", "Your face makes onions cry.", "You rae the reason they put instructions on shampoo", "Every enemy I've met, I've annihilated.", "You suck more than a suck machine set on 'suck a lot'", "You look like I need a drink.", "If I had a dollar for every brain you don't have, I'd have ONE dollar.", "I'd agree with you but then we'd both be wrong.", "The jerk store called and they're all out of you.", "You think you're too cool for school but I got a newsflash for you, Walter Cronkite. You aren't.", "Hold that though real quick, let me turn on the part of my brain that cares.", "Shut up, idiot head face.", "I'm about to school you like fish.", "Did you hear the bell ring? Some one is about to get served.", "Just shut up, and have my fries ready at the window.", "If my dogs butt looked like your face, my dog would look like it had a normal butt."]
        
        /*
        * @desc = instance of SmackTalk to be returned
        * @type = Object
        */
        var SmackTalk = {};
        
//        var filter_insertables = function(index) {
//            all.includes(index);
//        }
        
        var select = function(exclusions) {
            available_insertables = all.filter(
                function(value, index) {
                    exclusions.includes(index);
                }
            );
            return available_insertables[Math.floor(Math.random() * available_insertables.length)];
        }
        
        SmackTalk.retrieve = function(gender, exclusions) {
            string = select(exclusions);
            return {string, all.indexOf(string)}
        }
        
        return SmackTalk
    }
    
    angular
        .module('awkwardAssist')
        .service('SmackTalk', [SmackTalk]);
})();