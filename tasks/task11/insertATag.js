
urlNavBtn = $("#navSearch");
navDropDown = $("#link_nav");
navDropDown.hide();
$(urlNavBtn).on("click", function(){
    orderedListDropdown.slideUp();
    unorderedListDropdown.slideUp();
    navDropDown.slideToggle();
})

var link = $("#link");
var linkDropDown = $("#link_dropDown");
linkDropDown.hide();
$(link).on("click", function(){
    orderedListDropdown.slideUp();
    unorderedListDropdown.slideUp();
    linkDropDown.slideToggle();
})

var inputlinkUrl = $("#input_url");    
var inputlinkText = $("#input_text");

$("#navGoogle").on("click", function(){
    
    $("#link_nav").slideUp();

    var url = `https://google.com`;
    var text = `Google`;

    inputlinkUrl.val(url);
    inputlinkText.val(text);
})


$("#navFace").on("click", function(){

    $("#link_nav").slideUp();

    var url = `https://facebook.com`;
    var text = `Facebook`;

    inputlinkUrl.val(url);
    inputlinkText.val(text);
})

$("#inputInsertBtn").on("click", function(){

    linkDropDown.slideUp();

    var htmlTextArea = $("#htmlinputfield");
    var inputlinkUrl = $("#input_url");
    var inputurlval = inputlinkUrl.val();

    var inputlinkText = $("#input_text");
    var inputlinkTextVal = inputlinkText.val();

        if ($('#inputUrl_checkBox').is(":checked"))
        {
            var anctag = `<p><a href="${inputurlval}" target="_blank">${inputlinkTextVal}</a></p>`
            htmlTextArea.text(anctag);
        } else {
            var anctag = `<p><a href="${inputurlval}">${inputlinkTextVal}</a></p>`
            htmlTextArea.text(anctag);
        }
});