/*
 * @desc = DOM element, button to reveal menu of insertables
 * @type = {Object}, jQuery
 */
button = $(".insertable-button");
/*
 * @desc = DOM element, menu of insertables
 * @type = {Object}, jQuery
 */
menu = $(".insertable-menu");
/*
 * @desc = DOM element collection, button and menu for insertables
 * @type = {Object}, jQuery
 */
insertableAll = $(".insertable-container");

/*
* @desc = event listener, reveals and exapnds menu of insertables when insertable button is entered
* @type = {Function}, event listener
*/
button.mouseenter(function() {
    button.css({"background-color": "white", "color": "#00ADAD"});
    menu.show().animate({
        height: "400px",
        width: "350px"
    }, 300, showButtons() );
});

/*
* @desc = event listener, collapses insertable menu and hides it when mouse leaves all insertable elements
* @type = {Function}, event listener
*/
insertableAll.mouseleave(function() {
    button.css({"background-color": "#00ADAD", "color": "white"});
    menu.animate({
        height: "0px",
        width: "0px",
        border: "none"
    }, "fast", function() {
        menu.hide();
    });
});

/*
 * @desc = an event listener attached to all options in the insetable menu
 * highlights them and changes the color of the option's icon
 * @type = Function, event listener
*/
$(".insertable-menu h2").on("mouseover", function() {
    var icon = $( event.target.previousElementSibling );
    icon.css({color: "#00B7B7"});
});

/*
 * @desc = an event listener attached to all options in the insetable menu
 * returns their styling to their default settings
 * @type = Function, event listener
*/
$(".insertable-menu h2").on("mouseleave", function() {
    var icon = $( event.target.previousElementSibling );
    icon.css({color: "#008E8E"});
});

/*
 * @desc = an event listener attached to all options and the header of the insetable menu
 * makes them visible
 * @type = Function, event listener
*/
showButtons = function() {
    menu.children().animate({
        height: "2rem",
        opacity: "1"
    });
};