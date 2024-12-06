var boldBtn = $("#text_bold");
var isBold = false;

// Bold Button
boldBtn.on("click", function(){
    isBold = !isBold;
    $(".fa-bold").css("color", isBold ? "rgb(0, 195, 255)" : "black");
});

// textalign -> code in textalign.js file

// ordered list -> code in orderlist.js file

// unordered list -> code in unorder.js file

// link insert -> code in insertATag,js file

// text area
$("#word_input_field").on("input", function(event){

    var wordInputField = $("#word_input_field");
    var wordInputFieldValue = wordInputField.val();

    wordInputField.css("font-weight", isBold ? "bold" : "normal");
    wordInputField.css("text-align", textAlign === "none" ? "left" : textAlign); 

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
   
    function wordTohtml(){
        var htmlTextArea = $("#htmlinputfield");
        var wordInputFieldValue = $("#word_input_field").val().trim();
    
        if (wordInputFieldValue === "") {
            htmlTextArea.html("");
        } else {
            var unListStyle = unListstyleType !== "none" ? `style="list-style-type: ${unListstyleType}"` : "";
            var unListItems = wordInputFieldValue.split("\n").map(function(unline){
                var unliStyle = textAlign !== "none" ? ` style="text-align: ${textAlign};"` : "";
                return `<li${unliStyle}>${isBold ? `<strong>${unline}</strong>` : unline}</li>`
            }).join("");
        
            var listStyle = textListStyleType !== "none" ? ` style="list-style-type: ${textListStyleType};"` : ""; 
            
            var listItems = wordInputFieldValue.split("\n").map(function(line) {
                var liStyle = textAlign !== "none" ? ` style="text-align: ${textAlign};"` : "";
                return `<li${liStyle}>${isBold ? `<strong>${line}</strong>` : line}</li>`;
            }).join("");
           
            var addTags = isUnOList 
                ? `<ul ${unListStyle}>${unListItems}</ul>`
                :isList
                    ? `<ol${listStyle}>${listItems}</ol>`
                    : textAlign === "none"
                        ? `<p>${isBold ? `<strong>${wordInputFieldValue}</strong>` : wordInputFieldValue}</p>`
                        : `<p style="text-align: ${textAlign};">${isBold ? `<strong>${wordInputFieldValue}</strong>` : wordInputFieldValue}</p>`;
            
            htmlTextArea.html(addTags);
        }
        
    }
    
    // debounce
    function debounce(callback) {
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

