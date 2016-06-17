(function() {
    function MainCtrl($cookies, $rootScope) {
        
        /*
        * @desc alias for the controller's this object
        * @type {Object} 'this' object
        */
        var ctrl = this;
        
        /*
        * @desc current username
        * @type {String}
        */
        $rootScope.username = $cookies.get("blocChatCurrentUser");
    }
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['$cookies', "$rootScope", MainCtrl]);
})();