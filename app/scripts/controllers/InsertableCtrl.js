(function() {
    function InsertableCtrl(){
        
    }
    
    angular
        .module('awkwardAssist')
        .controller('InsertableCtrl', ['$scope', '$globalScope', '$firebaseArray', 'Insertable', InsertableCtrl]);
})();