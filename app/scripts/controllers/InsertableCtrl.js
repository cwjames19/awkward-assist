(function() {
    function InsertableCtrl($scope, $rootScope, $firebaseArray, Input, Insertable, SmackTalk){
        var ctrl = this;
                
        var insertText = function(str) {
            $scope.$parent.chatroom.newMessageContent += str;
        };
                
        ctrl.smackTalk = function() {
            var insertableString = SmackTalk.getSmackTalk($scope.$parent.chatroom.activeRoom.$id);
            insertableString
                .then(function(string) {
                    insertText(string);
                }, function(error) {
                    console.error("A problem occurred: ", error);
                });
        }
    }
    
    angular
        .module('awkwardAssist')
        .controller('InsertableCtrl', ['$scope', '$rootScope', '$firebaseArray', 'Input', 'Insertable', 'SmackTalk', InsertableCtrl]);
})();