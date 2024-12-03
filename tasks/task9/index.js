$(".colOfSecond2").hide();

$("#signup_button").click(function (){
    $(".colOfSecond").hide();
    $(".colOfSecond2").show();
    $(".sign_in").hide();
    $(".create_account").show();
    $(".create_account").css("z-index", "1");
    $(".colOfSecond2").addClass("content");
    $(".colOfSecond").removeClass("rtl");
    $(".colOfSecond").css("left", "0px");
    $(".sign_in").addClass("rtl");
    $(".create_account").removeClass("content");
})

$("#signin_button").click(function (){
    $(".sign_in").removeClass("rtl");
    $(".colOfSecond2").removeClass("content");
    $(".colOfSecond2").hide();
    $(".create_account").hide();
    $(".sign_in").show();
    $(".colOfSecond").show();
    $(".colOfSecond").addClass("rtl");
    $(".create_account").addClass("content")
})

