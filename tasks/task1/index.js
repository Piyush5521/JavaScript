// var arr = [];

// let fetchRess = fetch("data.json");

// fetchRess
//   .then((res) => res.json())
//   .then((d) => {
//       for(var i= 0; i<d.length; i++){
//         arr.push(d[i]);
//       }
//   });

// console.log(arr);




$(document).ready(function () {
    // Fetch JSON data and dynamically populate the content
    $.getJSON("data.json", function (data) { 
        var student = ''; 

        $.each(data, function (key, value) { 
            student += '<div class="qa">' +  '<div class="question">' + value.question + 
            '<img class="open" src="https://cdn-icons-png.flaticon.com/512/32/32195.png" width="15px" style="float:right;">' + 
            '</div>' + 
            '<p class="ans" style="display:none;">' + value.answer + '</p>' + '</div>'+
            '<br><br>'; 
        }); 

        $('#col').append(student); 
    });

    $('#col').on('click', '.open', function(){
        var $answer = $(this).closest('div.question').next('.ans'); 
        $answer.slideToggle();  

    });
});

