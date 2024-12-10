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
    var student = "";
    var count = 0;

    var questionid;
    var ansID;

    $.each(data, function (key, value) {
      questionid = "qa" + key;
      ansID = "ans" + key;

      student +=
        `<div class="qa">` +
        '<div class="question">' +
        value.question +
        `<img class="open" id="${questionid}" src="https://cdn-icons-png.flaticon.com/512/32/32195.png" width="15px" style="float:right;">` +
        "</div>" +
        `<p class="ans" id="${ansID}" style="display:none;">` +
        value.answer +
        "</p>" +
        "</div>" +
        "<br><br>";
      //   console.log("count", count);
      //   console.log("key", key);
      count++;
    });

    $("#col").append(student);
    // $(".qa").click(function () {
    //   var answer = $(this).children().next(".ans");
    //   answer.slideToggle();
    // });

    $(".qa").click(function () {
      var answer = $(this).children(".ans");
      answer.slideToggle();
    });

    // $("#col").on("click", ".open", function () {
    //   var $answer = $(this).parent("div.question").next(".ans");
    //   $answer.slideToggle();
    // });

    // $("#col").on("click", ".open", function () {
    //   var $answer = $(this).closest("div.question").next(".ans");
    //   $answer.slideToggle();
    // });
  });
});
