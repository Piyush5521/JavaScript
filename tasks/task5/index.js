var display = $("#display");

var arr = ["Message One", "Message Two", "Message Three", "Message Four"]


$("#notificationBtn").on("click", function(){

    var randomNumber = Math.floor(Math.random()*arr.length);
    var message = arr[randomNumber];

    display.append(`<div class='card${randomNumber}'> ${message} <div/>`);

    setTimeout(() => {
            display.remove();
    }, 3000); 
})