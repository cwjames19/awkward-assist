btn = $("#btn-help");
container = $("#insertable-container");
btnAndContainer = $("#btn-help-container");

btnAndContainer.mouseenter( function() {
    console.log("in the mouseenter block");
        
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
    container.children().show()
});


btnAndContainer.mouseleave( function() {
    console.log("in the mouseleave block");
    
    container.children().hide();

    container.animate({
        height: "0em",
        width: "0em"
    }, 200, function() {container.hide()} );
    
    container.css({border: "none"});
    
    btn.css({"background-color": "#00ADAD", "color": "white"});
});