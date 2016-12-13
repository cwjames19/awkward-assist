var btn = $("#btn-help");
var container = $("#insertable-container");
var btnAndContainer = $("#btn-help-container");

console.log("about to add event listeners");
btnAndContainer.mouseenter( function(event) {
    if($( window )[0].innerWidth >= 768) {
        btn.css({
            "background-color": "white",
            "color": "#00ADAD"
        });
        container.css({
            border: "ridge 2px #00ADAD",
            display: "flex",
            flexDirection: "column",
            alignContent: "stretch"
        });
        container.show().animate({
            height: "34em",
            width: "27em"
        }, 300 );
        container.children().show();
    }
});


btnAndContainer.mouseleave( function(event) {
    if($( window )[0].innerWidth >= 768) {
        container.children().hide();
        container.animate({
            height: "0em",
            width: "0em"
        }, 200, function() {container.hide()} );
        container.css({border: "none"});
        btn.css({"background-color": "#00ADAD", "color": "white"});
    }
});