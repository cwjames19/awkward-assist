(function() {
    function InsertableCtrl($scope, $globalScope, $firebaseArray, Insertable){
        var ctrl = this;
        
        this.smackTalkTest = function() {
            SmackTalk.retrieveTest();
        }
    }
    
    angular
        .module('awkwardAssist')
        .controller('InsertableCtrl', ['$scope', '$globalScope', '$firebaseArray', 'Insertable', InsertableCtrl]);
})();