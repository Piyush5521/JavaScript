// ordered list
var isList = false;
var orderedListBtn = $("#orderLists");
var orderedListDropdown = $("#ordered_slide");
orderedListDropdown.hide();
orderedListBtn.on("click", function() {
    textAlignDropdown.slideUp();
    isList = !isList;
    $(".fa-list-ol").css("color", isList ? "rgb(0, 195, 255)" : "black");
    orderedListDropdown.slideToggle();
})

var olDefault = $("#ol_d");
var olLowerAlpha = $("#ol_la");
var olLowerGreek = $("#ol_lg");
var olLowerRoman = $("#ol_lr");
var olUpperAlpha = $("#ol_ua");
var UpperRoman = $("#ol_ur");

var textListStyleType = "none";

olDefault.on("click", function(){
    textListStyleType = "none";
    orderedListDropdown.slideUp();
})

olLowerAlpha.on("click", function(){
    textListStyleType = "lower-alpha";
    orderedListDropdown.slideUp();
})

olLowerGreek.on("click", function(){
    textListStyleType = "lower-greek";
    orderedListDropdown.slideUp();
})

olLowerRoman.on("click", function(){
    textListStyleType = "lower-roman";
    orderedListDropdown.slideUp();
})

olUpperAlpha.on("click", function(){
    textListStyleType = "upper-alpha";
    orderedListDropdown.slideUp();
})

UpperRoman.on("click", function(){
    textListStyleType = "upper-roman";
    orderedListDropdown.slideUp();
})