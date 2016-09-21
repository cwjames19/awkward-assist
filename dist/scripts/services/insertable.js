(function() {
    function Insertable($firebaseArray, SmackTalk) {
        
        /*
        * @desc = instance of Insertable to be returned
        * @type = Object
        */
        var Insertable = {};
        
        /*
        * Issues with this. Can use object["function-name"]
        * to call a function with a string but can not
        * call a service... maybe if I define the servic
        * first though... wait, the service is already
        * defined. Maybe I could use window like it demo's
        * in the stack overflow question.
        * ... I don't know... the controller won't connect to * the final smacktalk service
        */
        
        Insertable.retrieveSimple = function(type) {
            console.log("inside of the Insertable service in insertable.js");
            console.log("Argument passed: " + type);
            //return SmackTalk.retrieveTest();
            return window[type].retrieveTest();
        };
        
        var firebaseRef = firebase.database().ref()
        
        return Insertable;
    }
    
    angular
        .module('awkwardAssist')
        .service('Insertable', ['$firebaseArray', 'SmackTalk', Insertable]);
})();