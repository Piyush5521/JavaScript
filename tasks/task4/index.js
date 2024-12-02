var message = $("#messageinput");

var display = $("#display");


$(".display").hide();

message.keyup(function(event){
    $(".display").show();

    var value = message.val();

    value = value.split(","); 
    
    var arr = [];

    for(var i =0; i< value.length; i++){        
        arr.push(value[i]);
    }

    var data = "";
    
    for(var j = 0; j< arr.length; j++){
        data +=`<span class="display">${arr[j]}</span>`
    }


    $("#display").html(data);

})





// var message = $("#messageinput");

// message.keyup(function(event){
//     var value;
//     if(event.key === ','){
//        event.key.replace(',', ' ');
//        value = message.val();
//        console.log(value)
//     }
// })
