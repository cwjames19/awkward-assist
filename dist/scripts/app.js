(function() {    
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        var rootState = {
            name: 'root',
            url: '/',
            templateUrl: '/templates/root.html'
        };
        
        var mobileRoomsState = {
            name: 'mobile-rooms',
            url: '/mobile-rooms',
            templateUrl: '/templates/mobile-rooms.html'
        };
        
        $stateProvider.state(rootState);
        $stateProvider.state(mobileRoomsState);

    }
    
    angular
        .module('awkwardAssist', ['firebase', 'ui.bootstrap', 'ui.router', 'ngCookies'])
        .config(config);
})();