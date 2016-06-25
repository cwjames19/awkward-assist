(function() {
    function InsertableCtrl($scope, $rootScope, $firebaseArray, Insertable){
        var ctrl = this;
        
        this.smackTalkTest = function() {
            SmackTalk.retrieveTest();
        }
    }
    
    angular
        .module('awkwardAssist')
        .controller('InsertableCtrl', ['$scope', '$rootScope', '$firebaseArray', 'Insertable', InsertableCtrl]);
})();