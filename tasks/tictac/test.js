// function firstC(){
//     document.getElementById("col1").innerText="x";
// }

// function sC() {
//     document.getElementById("col2").innerText="o";
// }

let arr = [];

var clicks = false;
var player1 = true;


// if(player1 === true) {
//     document.querySelector("h1").innerText="Player1";
// }

// else if(player1 === false){
//     document.querySelector("h1").innerText="Player2";
// }



// function onClick() {
//     clicks = true;
   
//     if(player1 === true) {
//         document.getElementById("col1").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col1").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }

// function sc() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col2").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col2").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }

// function tc() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col3").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col3").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }

// function fourc() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col4").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col4").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }

// function fifc() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col5").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col5").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }

// function sixc() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col6").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col6").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }


// function sevc() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col7").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col7").innerText="o";
//         player1 = true;
//         arr.push("0");
//     }
// }
// function eigc() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col8").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col8").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }
// function ninec() {
//     clicks = true;
    
//     if(player1 === true) {
//         document.getElementById("col9").innerText="x";
//         player1 = false;
//         arr.push("x");
//     }
//     else {
//         document.getElementById("col9").innerText="o";
//         player1 = true;
//         arr.push("o");
//     }
// }




var colTotal = document.querySelectorAll(".col").length;

for (var i = 0; i < colTotal; i++) {
    document.querySelectorAll(".col")[i].addEventListener("click", function (){
    
        if(player1 === true) {
            this.innerText="x";
            player1 = false;
            arr.push("x");
        }
        else {
            this.innerText="o";
            player1 = true;
            arr.push("o");
        }
    
    })
}