var display = $("#display");

var arr = ["Message One", "Message Two", "Message Three", "Message Four"]


$("#notificationBtn").on("click", function(){

    var randomNumber = Math.floor(Math.random()*arr.length);
    var message = arr[randomNumber];

    var toast = $(`<div class='card${randomNumber}'> ${message} </div>`);

    display.append(toast);

    setTimeout(() => {
            toast.remove();
    }, 3000); 
})
