var isUnOList = false;
var unorderedListBtn = $("#unorder_list");
var unorderedListDropdown = $("#unordered_slide");
unorderedListDropdown.hide();
$(unorderedListBtn).on("click", function(){
    orderedListDropdown.slideUp();
    isUnOList = !isUnOList;
    $(".fa-list").css("color", isUnOList ? "rgb(0, 195, 255)" : "black");
    unorderedListDropdown.slideToggle();
})


var un_default = $("#unDefault");
var un_circle = $("#unCircle");
var un_disc = $("#unDisc");
var un_square = $("#unSquare");

var unListstyleType = "none";

un_default.on("click", function(){
    unListstyleType = "none";
    unorderedListDropdown.slideUp();
})

un_circle.on("click", function(){
    unListstyleType = "circle";
    unorderedListDropdown.slideUp();
})

un_disc.on("click", function(){
    unListstyleType = "disc";
    unorderedListDropdown.slideUp();
})

un_square.on("click", function(){
    unListstyleType = "square";
    unorderedListDropdown.slideUp();
})