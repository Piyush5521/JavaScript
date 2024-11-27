$(".key").css("font-size", "1rem");
$(".keyCode").hide();
$(".code").hide();

$(document).on("keydown", function(event){
    $(".key").css("font-size", "2rem");
    $(".key1").text("key");
    if(event.key ===" "){
        $(".key").text("Space");
    }
    else{
        $(".key").text(event.key);
    }
})

$(document).on("keydown", function(event){
    $(".keyCode").show();
    $(".key2").text("event.keyCode");
    $(".keyCode").text(event.keyCode);
})

$(document).on("keydown", function(event){
    $(".code").show();
    $(".key3").text("event.code"); 
    $(".code").text(event.code);
})
