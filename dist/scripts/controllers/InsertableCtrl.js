(function() {
    function InsertableCtrl($scope, $rootScope, $firebaseArray, Input, Insertable, SmackTalk){
        var ctrl = this;
                
        var insertText = function(str) {
            $scope.$parent.chatroom.newMessageContent += str;
        };
        
//        ctrl.insertSimple = function(type) {
//            console.log("In the insertSimple method in InsertableCtrl");
//            console.log("Argument passed: " + type);
//            console.log(Insertable.retrieveSimple(type));
//        }
        
        ctrl.smackTalkTest = function() {
            console.log("In InsertableCtrl");
            text = SmackTalk.getSmackTalkTest($scope.$parent.chatroom.activeRoom.$id);
            console.log("Back in Insertable Ctrl. Here's the smackTalk: " + text);
            insertText(text);
        }
        
        ctrl.smackTalk = function() {
            SmackTalk.getSmackTalk($scope.$parent.chatroom.activeRoom.$id);
        }
    }
    
    angular
        .module('awkwardAssist')
        .controller('InsertableCtrl', ['$scope', '$rootScope', '$firebaseArray', 'Input', 'Insertable', 'SmackTalk', InsertableCtrl]);
})();