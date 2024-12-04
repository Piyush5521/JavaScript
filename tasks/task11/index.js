$("#word_input_field").on("input", function(){

    var wordInputField = $("#word_input_field");
    var wordInputFieldValue = wordInputField.val();
    var charLength = wordInputFieldValue.length;
    
    var displayTotalChar = $("#display_char_here");
    $(displayTotalChar).text(charLength);
    
    if(wordInputFieldValue !== ""){
        var wordCount = wordInputFieldValue.split(" ").length;
        var displayTotalWords = $("#display_words_here");
        $(displayTotalWords).text(wordCount);

    }  else {
        $(displayTotalWords).text(0);        
    }
})
