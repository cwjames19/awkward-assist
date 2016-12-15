(function() {
    function SentAt() {
        return function(input) {
            
            var sentAt = new Date(input);
            var today = new Date();
            
            function toTimeString(longDate) {
                function pad(input) {
                    if (input < 10) {
                        return "0" + input.toString();
                    } else {
                        return input.toString();
                    }
                }
                
                var hours = longDate.getHours() % 12;
                var midday;
                (hours > 11) ? midday = "am" : midday = "pm";
                (hours === 0) ? hours = 12 : hours;
                
                var minutes = longDate.getMinutes();
                var seconds = longDate.getSeconds();
                
                return hours + ":" + pad(minutes) + " " + midday;
            }
            
            function toDateString(longDate) {
                
                var date  = longDate.getDate();
                var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][longDate.getMonth()];
                var year = longDate.getFullYear();
                
                return date + " " + month;
            }
            
            if (toDateString(sentAt) === toDateString(today)) {
                return toTimeString(sentAt);
            } else {
                return toDateString(sentAt) + ", " + toTimeString(sentAt);
            };
        };
    }
    
    angular
        .module('awkwardAssist')
        .filter('SentAt', [SentAt]);
})();