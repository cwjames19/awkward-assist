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
* @desc = event listener, collapses insertable menu and hides it when mouse leaves all insertable elements
* @type = {Function}, event listener
*/
insertableAll.mouseleave(function() {
    menu.animate({
        height: "0px",
        width: "0px"
    }, "fast", function() {
        menu.hide();
    });
});

/*
* @desc = event listener, reveals and exapnds menu of insertables when insertable button is entered
* @type = {Function}, event listener
*/
button.mouseenter(function() {
    menu.show().animate({
        height: "400px",
        width: "350px",
    }, 300);
});