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
        
        var mobileInsertableState = {
            name: 'mobile-insertable',
            url: '/mobile-insertable',
            templateUrl: '/templates/mobile-insertable.html'
        };
        
        $stateProvider.state(rootState);
        $stateProvider.state(mobileRoomsState);
        $stateProvider.state(mobileInsertableState);

    }
    
    angular
        .module('awkwardAssist', ['firebase', 'ui.bootstrap', 'ui.router', 'ngCookies'])
        .config(config);
})();