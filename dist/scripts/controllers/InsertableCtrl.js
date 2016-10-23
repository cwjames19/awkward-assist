(function() {
    function InsertableCtrl($scope, $rootScope, $firebaseArray, Insertable){
        var ctrl = this;
                
        var insertText = function(string) {
            $scope.$parent.chatroom.newMessageContent += string;
        };
        
        ctrl.getInsertable = function(insertableType) {
            var insertableString = Insertable.retrieveInsertable(insertableType, $scope.$parent.chatroom.activeRoom.$id);
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
        .controller('InsertableCtrl', ['$scope', '$rootScope', '$firebaseArray', 'Insertable', InsertableCtrl]);
})();