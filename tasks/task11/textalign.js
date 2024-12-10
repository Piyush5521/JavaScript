// Align dropdown
var textAlignBtn = $("#align_text");
var textAlignDropdown = $("#align_text_slide");
textAlignDropdown.hide();
var isAlign = false;

// Align btn
textAlignBtn.on("click", function(){
    isAlign = !isAlign;
    $(".fa-bars").css("color", isAlign ? "rgb(0, 195, 255)" : "black");
    textAlignDropdown.slideToggle();
})

var textAlign = "none";
// align left
var alignLeft = $("#align_left");
var alignRight = $("#align_right");
var alignCenter = $("#align_center");
var alignJustify = $("#align_justify");

alignLeft.on("click", function(){
    textAlign = "left";
    textAlignDropdown.slideUp();
})

alignRight.on("click", function(){
    textAlign = "right";
    textAlignDropdown.slideUp();
})

alignCenter.on("click", function(){
    textAlign = "center";
    textAlignDropdown.slideUp();
})

alignJustify.on("click", function(){
    textAlign = "justify";
    textAlignDropdown.slideUp();
})