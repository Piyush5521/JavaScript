var arr = ['a', 'b', 'c', 'd', 'w', 'p', 'h'];

var randomNumber = Math.floor(Math.random() * arr.length);
console.log(randomNumber);

var keygenerate = arr[randomNumber];

$('h1').text(keygenerate);

$(document).on("keydown", function(event){
    $("h2").text('previous key: '+event.key);

    if(event.key === keygenerate){
        randomNumber = Math.floor(Math.random() * arr.length);
        keygenerate = arr[randomNumber];
        $('h1').text(keygenerate);
    }
    else{
        $("h2").text("Press above key to continue");
    }
});

