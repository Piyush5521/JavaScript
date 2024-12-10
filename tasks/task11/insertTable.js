var tableBtn = $("#addTable");

var tabledropdown = $("#tableDropDown");

tabledropdown.hide();

tableBtn.on("click", function(){
    tabledropdown.slideToggle();
})

var htmlTextArea = $("#htmlinputfield");

var r;

var column1 = $("#c1");
var column2 = $("#c2");
var column3 = $("#c3");
var column4 = $("#c4");
var column5 = $("#c5");
var column6 = $("#c6");
var col;

column1.on("click", function(){
    tabledropdown.hide();
    col = 1;
    tablePrint(col, r=1);
})
column2.on("click", function(){
    tabledropdown.hide();
    col = 2;
    tablePrint(col, r=1);
})
column3.on("click", function(){
    tabledropdown.hide();
    col = 3;
    tablePrint(col, r=1);
})
column4.on("click", function(){
    tabledropdown.hide();
    col = 4;
    tablePrint(col, r=1);
})
column5.on("click", function(){
    tabledropdown.hide();
    col = 5;
    tablePrint(col, r=1);
})
column6.on("click", function(){
    tabledropdown.hide();
    col = 6;
    tablePrint(col, r=1);
})

var col1 = $("#cc1");
var col2 = $("#cc2");
var col3 = $("#cc3");
var col4 = $("#cc4");
var col5 = $("#cc5");
var col6 = $("#cc6");


col1.on("click", function(){
    tabledropdown.hide();
    col = 1;
    tablePrint(col, r=2);
})
col2.on("click", function(){
    tabledropdown.hide();
    col = 2;
    tablePrint(col, r=2);
})
col3.on("click", function(){
    tabledropdown.hide();
    col = 3;
    tablePrint(col, r=2);
})
col4.on("click", function(){
    tabledropdown.hide();
    col = 4;
    tablePrint(col, r=2);
})
col5.on("click", function(){
    tabledropdown.hide();
    col = 5;
    tablePrint(col, r=2);
})
col6.on("click", function(){
    tabledropdown.hide();
    col = 6;
    tablePrint(col, r=2);
})

function tablePrint(col, r) {
    var fullTable = "<table>\n";
    for (var i = 0; i < r; i++) {
        var str = "\t<tr>\n"; 
        for (var j = 0; j < col; j++) {
            str += `\t\t<td>${j+1}</td>\n`;
        }
        str +="\t</tr> \n";
        fullTable += str; 
    }
     fullTable += "</table>"
    htmlTextArea.val(fullTable);
}