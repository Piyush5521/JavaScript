let counter = 0;

$("button").click(function () {
  counter++;

  var cardId = 'item'+counter;

  var imgid = 'img'+counter;

  $("ol").append(
    '<li class="'+cardId+'"><div class="card"> <div class="card-nav"> <img class="icon-img" src="edit.png" width="20px"> <img  class="'+imgid+'" src="bin.png" width="20px"> </div> <textarea id="w3review" name="w3review" rows="20" cols="50"></textarea> </div></li>'
  );
  console.log(imgid);
  console.log(cardId);

  $("." + imgid).click(function () {
    $("." + cardId).remove();
  });
});


// $("imgid").click(function () {
//     $("cardId").remove();
// });