(function() {
    function Insertable($firebaseArray) {
        
        /*
        * @desc = instance of Insertable to be returned
        * @type = Object
        */
        var Insertable = {};
        
        var firebaseRef = firebase.database().ref()
        
        return Insertable;
    }
    
    angular
        .module('awkwardAssist')
        .controller('Insertable', ['$firebaseArray', Insertable]);
})();