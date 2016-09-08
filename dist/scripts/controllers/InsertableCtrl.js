(function() {
    function InsertableCtrl($scope, $rootScope, $firebaseArray, Input, Insertable, SmackTalk){
        var ctrl = this;
                
        var insertText = function(str) {
            $scope.$parent.chatroom.newMessageContent += str;
        };
        
        ctrl.smackTalkTest = function() {
            console.log("In the smack talk test in insertable ctrl");
            SmackTalk.retrieveTest();
            console.log(SmackTalk.retrieveTest());
        }
        
        ctrl.insertSimple = function(type) {
            console.log("In the insertSimple method in InsertableCtrl");
            console.log("Argument passed: " + type);
            console.log(Insertable.retrieveSimple(type));
        }
        
//        ctrl.getSmackTalk = function() {
//            console.log("In the controller");
//            console.log($scope.insertable);
//            console.log($scope.$parent);
//            console.log($scope.$parent.chatroom);
//            console.log($scope.$parent.chatroom.newMessageContent);
//            console.log("What InsertableCtrl thinks Input is: " + Input);
//            $scope.$parent.chatroom.newMessageContent += "Hello?";
//            console.log("What InsertableCtrl thinks Input is: " + Input);
//        }
        
        ctrl.getSmackTalk = function() {
            console.log("In the controller");
            text = SmackTalk.retrieveTest();
            console.log(text);
            insertText(text);
        }
    }
    
    angular
        .module('awkwardAssist')
        .controller('InsertableCtrl', ['$scope', '$rootScope', '$firebaseArray', 'Input', 'Insertable', 'SmackTalk', InsertableCtrl]);
})();