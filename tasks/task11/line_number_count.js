$("#htmlinputfield").on("input", function(){
    
    var inputField = $("#htmlinputfield");
    var inputFieldValue = inputField.val();
    var displaylinenumber = $(".line_numbers");

    var lines = inputFieldValue.split('\n');

    var storenum = ""; 

    for (let i = 1; i <= lines.length; i++) {
        storenum += `${i} <br>`; 
    }

    displaylinenumber.html(storenum);

})
