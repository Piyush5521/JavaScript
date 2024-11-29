var display = $(".result_display");

var input = $("#input");

var arr = [
  "Channel",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to became Freelancer",
  "How to became Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
  "Algorithms",
  "Picnic",
  "Zebra",
  "DSA",
  "Instagram",
  "Whatsapp"
];

$(display).hide();

$(input).on("keyup", function () {
    $(".tabs").hide();
  $(display).show();

  var inputarr = input.val().toLowerCase();

    if (inputarr === "") {
        $(display).hide();
        $(".tabs").show();
        return;
    }

  var newarr = arr.filter(a => a.toLowerCase().includes(inputarr));

  var data = "";

  newarr.forEach((item) => {
        data += `<li>${item}</li>`;
  })


  $(display).html(data);

});

