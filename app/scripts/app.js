(function() {    
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider

    }
    
    angular
        .module('blocChat', ['firebase', 'ui.bootstrap', 'ui.router', 'ngCookies'])
        .config(config);
})();