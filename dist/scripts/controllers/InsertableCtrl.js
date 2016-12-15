(function() {
    function InsertableCtrl($scope, $rootScope, $firebaseArray, $state, $window, Insertable){
        var ctrl = this;
                
        var insertText = function(string) {
            $scope.$parent.chatroom.newMessageContent += string;
        };
        
        ctrl.getInsertable = function(insertableType) {
            let activeRoom = $scope.$parent.chatroom.activeRoom;
            if (activeRoom) {
                var insertableString = Insertable.retrieveInsertable(insertableType, activeRoom.$id);
                insertableString
                    .then(function(string) {
                        insertText(string);
                        $state.go('root', {});
                    }, function(error) {
                        console.error("A problem occurred: ", error);
                    }
                );
            } else {
                $window.alert("Pick a chatroom before writing your message.");
            }
            
        };
        
        ctrl.openMobileMenu = function(newState) {
            let xsScreenBreakpoint = 768;
            console.log($( window ));
            console.log($( window )[0]);
            console.log($( window )[0].innerWidth);
            if( $( window )[0].innerWidth < xsScreenBreakpoint ) {
                console.log("In the if block");
                $scope.$parent.chatroom.transitionState('mobile-insertable');
            }
        }
    }
    
    angular
        .module('awkwardAssist')
        .controller('InsertableCtrl', ['$scope', '$rootScope', '$firebaseArray', '$state', '$window', 'Insertable', InsertableCtrl]);
})();