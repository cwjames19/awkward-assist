(function() {
    function Fixture() {
        var Fixture = {};
        
        var breakups = {};
        
        var compliments = {};
        
        var excusesToLeave = {};
        
        var jokes = {};
        
        /* some comment */
        var smackTalk = {
            reference: firebase.database().ref().child('smackTalk'),
            library: ["Your hair looks STUPID.", "You loook like you fell off the ugly tree and hit every branch on the way down.", "Your mother was a hamster and your father smelled of elderberries.", "Has anyone ever told you that you look like a partially full burlap sack with a face drawn on it?", "You know the saying, 'you are what you eat'? What the hell did you eat?!", "Your face looks like it caught fire and someone put it out with a hammer.", "Your face makes onions cry.", "You are the reason they put instructions on shampoo.", "Every enemy I've met, I've annihilated.",  "You look like I need a drink.", "If I had a dollar for every brain you don't have, I'd have a dollar.", "I'd agree with you but then we'd both be wrong.", "The jerk store called and they're all out of you.", "You think you're too cool for school. Well I've got a newsflash for you, Walter Cronkite. You aren't.", "Hold that thought real quick, let me turn on the part of my brain that cares.", "Shut up, idiot head face.", "I'm about to school you like fish.", "Did you hear the bell ring? Some one is about to get served.", "Just shut up and have my fries ready at the window.", "If my dog's butt looked like your face, my dog would look like a normal dog."]
        };
        
        var subjectChanges  = {};
        
        /*
        * @func Fixture.getInsertable()
        * @desc retrieves a fixture as specified by the parameter
        * @param String, name of the desired fixture
        * @returns Object, fixture with insertable text and database reference
        */
        Fixture.getInsertable = function(string) {
            return eval(string);
        };
        
        return Fixture;
    };
    
    angular
        .module('awkwardAssist')
        .service('Fixture', [Fixture]);
    
})();