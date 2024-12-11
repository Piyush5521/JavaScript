// Sort 
var sortButton = $("#sort_btn");
var SdropDown = $("#sort_dropDown");
var sNum = $("#Selectednumber");

SdropDown.hide();

sortButton.on("click", function(){
    SdropDown.slideToggle();
})

var sbtn1 = $("#set5");
var sbtn2 = $("#set10");
var sbtn3 = $("#set15");
var sbtn4 = $("#set20");
var sbtn5 = $("#set25");
var sbtn6 = $("#set100");

sbtn1.on("click", function(){
    SdropDown.slideUp();
    sNum.text("5");
})

sbtn2.on("click", function(){
    SdropDown.slideUp();
    sNum.text("10");
})

sbtn3.on("click", function(){
    SdropDown.slideUp();
    sNum.text("15");
})

sbtn4.on("click", function(){
    SdropDown.slideUp();
    sNum.text("20");
})

sbtn5.on("click", function(){
    SdropDown.slideUp();
    sNum.text("25");
})

sbtn6.on("click", function(){
    SdropDown.slideUp();
    sNum.text("100");
})

var Displaytable = $("#display_table");

var searchBar = $("#searchfield");




function test(){
fetch("json.json")
.then(function(response){
    return response.json();
})

.then(function(data){
    var str = "";

    $.each(data, function(key, value){
        str+= `<tr><td class="fieldName"> ${value.Name}</td>
        <td class="fieldExt">${value["Ext."]}</td>
        <td class="fieldCity">${value.City}</td>
        <td class="fieldStartDate"> ${value["Start Date"]} </td>
        <td class="fieldCompletion">${value.Completion}</td>
        </tr>`
    })

    str+= `<tr>     <th class="fieldName">Name</th>
                    <th class="fieldExt">Ext.</th>
                    <th class="fieldCity">City</th>
                    <th class="fieldStartDate">Start Date</th>
                    <th class="fieldCompletion">Completion</th> 
        </tr>`

    Displaytable.html(str);


 $(searchBar).on("keyup", function(){
    var inputarr = searchBar.val().toLowerCase();
    console.log("check " + inputarr);
   
    var newarr;

    $.each(data, function(key, item){
        console.log("Name " + item.Name);
        newarr = item.filter((item) => item.Name.toLowerCase() === inputarr);
        console.log(newarr);

        // var sd = "";

        // newarr.forEach((item) => {
        //     sd += `<tr><td class="fieldName"> ${value.Name}</td>
        //     <td class="fieldExt">${value["Ext."]}</td>
        //     <td class="fieldCity">${value.City}</td>
        //     <td class="fieldStartDate"> ${value["Start Date"]} </td>
        //     <td class="fieldCompletion">${value.Completion}</td>
        //     </tr>`;
        // })
    })
 })

})

}
test()
