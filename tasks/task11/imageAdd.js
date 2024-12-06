var imageDropdownBtn = $("#addImage");
var add_upload_dropdown = $("#add_upload_img");

add_upload_dropdown.hide();

imageDropdownBtn.on("click", function(){
    add_upload_dropdown.slideToggle();
})

var byimgsec = $("#uploadImagesec");
var byurlsec = $("#bylinksec");

var imguploadbtn = $("#by_upload");
var imgurlbtn = $("#by_link")

$(byurlsec).hide();

$(imguploadbtn).on("click", function(){
    byurlsec.hide();
    byimgsec.show();
})

$(imgurlbtn).on("click", function(){
    byimgsec.hide();
    byurlsec.show();
})


var insertImgBtn = $("#insertImgBtn");
var htmlTextArea = $("#htmlinputfield");


insertImgBtn.on("click", function(){
    add_upload_dropdown.slideUp();

    var selectedPhoto = $("#selectPhoto");
    var spValue = selectedPhoto.val();

    var imgtag = `<img src="${spValue}">`
    
    htmlTextArea.html(imgtag);
})

var insertimgbyurlBtn = $("#insertImgurlBtn");

insertimgbyurlBtn.on("click", function(){
    add_upload_dropdown.slideUp();

    var entered_url = $("#enterurl");
    var entered_urlValue = entered_url.val();

    var imgTagUrl = `<img src="${entered_urlValue}">`

    htmlTextArea.html(imgTagUrl);

})