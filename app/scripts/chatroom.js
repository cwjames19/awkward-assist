$("span.username").click(function() {
            console.log("click event triggered!");
//            console.log("position.top: " + this.position().top);
        });
        
$("span.username").mouseenter(function() {
    console.log("mouseenter event triggered!");
//            console.log("position.top: " + this.position().top);
});

$("div.chatroom-message").click(function() {
    console.log("click event triggered for div!");
//            console.log("position.top: " + this.position().top);
});