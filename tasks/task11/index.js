var boldBtn = $("#text_bold");
var isBold = false;

// Bold Button
boldBtn.on("click", function(){
    isBold = !isBold;
    $(".fa-bold").css("color", isBold ? "rgb(0, 195, 255)" : "black");
});

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

// ordered list
var olDefault = $("#ol_d");
var olLowerAlpha = $("#ol_la");
var olLowerGreek = $("#ol_lg");
var olLowerRoman = $("#ol_lr");
var olUpperAlpha = $("#ol_ua");
var UpperRoman = $("#ol_ur");

var textListStyleType = "none";

olDefault.on("click", function(){
    textListStyleType = "none";
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

// text area
$("#word_input_field").on("input", function(event){

    var wordInputField = $("#word_input_field");
    var wordInputFieldValue = wordInputField.val();

    wordInputField.css("font-weight", isBold ? "bold" : "normal");
    wordInputField.css("text-align", textAlign === "none" ? "left" : textAlign);  // Default left align if no other alignment selected

    var charLength = wordInputFieldValue.length;
    
    var displayTotalChar = $("#display_char_here");
    $(displayTotalChar).text(charLength);
    
    if(wordInputFieldValue.trim() !== ""){
        var wordCount = wordInputFieldValue.split(" ").length;
        var displayTotalWords = $("#display_words_here");
        $(displayTotalWords).text(wordCount);
    }  else {
        $(displayTotalWords).text(0);   
    }

    // Create list when "Enter" is pressed
    function wordTohtml(){
        var htmlTextArea = $("#htmlinputfield");

        if (wordInputFieldValue.trim() === "") {
            htmlTextArea.html(""); // Clear the preview if no text
        } else {
            var addTags = textAlign === "none"
                ? `<p>${isBold ? `<strong>${wordInputFieldValue}</strong>` : wordInputFieldValue}</p>`
                : `<p style="text-align: ${textAlign};">${isBold ? `<strong>${wordInputFieldValue}</strong>` : wordInputFieldValue}</p>`;
            
            // Check if "Enter" was pressed to create <li> in <ol>
            if (event.key === "Enter") {
                var currentHtml = htmlTextArea.html();
                var newHtml = currentHtml.includes("<ol>") ? currentHtml : `<ol style="list-style-type: ${textListStyleType};"></ol>`;
                
                // Append new <li> for each Enter press
                if (wordInputFieldValue.trim() !== "") {
                    newHtml = newHtml.replace("</ol>", `<li>${isBold ? `<strong>${wordInputFieldValue}</strong>` : wordInputFieldValue}</li></ol>`);
                    htmlTextArea.html(newHtml);
                }

                // Clear the input field after pressing enter
                wordInputField.val("");
            } else {
                htmlTextArea.html(addTags);  // Default behavior when not pressing Enter
            }
        }
    }

    // debounce
    function debounce(callback){
        let timeout;

        return() => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                callback();
            }, 1000)
        }
    }

    var debounceToHtml = debounce(wordTohtml)
    debounceToHtml();
})


var orderedListBtn = $("#orderLists");
var orderedListDropdown = $("#ordered_slide");
orderedListDropdown.hide();
$(orderedListBtn).on("click", function(){
    textAlignDropdown.slideUp();
    orderedListDropdown.slideToggle();
})

var unorderedListBtn = $("#unorder_list");
var unorderedListDropdown = $("#unordered_slide");
unorderedListDropdown.hide();
$(unorderedListBtn).on("click", function(){
    orderedListDropdown.slideUp();
    unorderedListDropdown.slideToggle();
})

var link = $("#link");
var linkDropDown = $("#link_dropDown");
linkDropDown.hide();
$(link).on("click", function(){
    orderedListDropdown.slideUp();
    unorderedListDropdown.slideUp();
    linkDropDown.slideToggle();
})

urlNavBtn = $("#navSearch");
navDropDown = $("#link_nav");
navDropDown.hide();
$(urlNavBtn).on("click", function(){
    orderedListDropdown.slideUp();
    unorderedListDropdown.slideUp();
    navDropDown.slideToggle();
})
