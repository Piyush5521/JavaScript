let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var clicks = false;
var player1 = true;
let winarr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


var colTotal = document.querySelectorAll(".col").length;
for (var i = 0; i < colTotal; i++) {
  document.querySelectorAll(".col")[i].addEventListener("click", function () {

    if (arr[this.id - 1] === 0) {
      if (player1 === true) {
        this.innerText = "x";
        player1 = false;
        arr[this.id - 1] = "x";  
        let res = isComplete("x");
        if (res) {
          document.querySelector("h1").innerText = "Player 1 Wins!";
        } else {
          document.querySelector("h1").innerText = "Current: Player 2";
        }
      } else {
        this.innerText = "o";
        player1 = true;
        arr[this.id - 1] = "o";  
        let res = isComplete("o");
        if (res) {
          document.querySelector("h1").innerText = "Player 2 Wins!";
        } else {
          document.querySelector("h1").innerText = "Current: Player 1";
        }
      }
    } else {
      alert("This place is already occupied");
    }
    console.log(arr);
  });
}


var isComplete = (userValue) => {
  for (let i = 0; i < winarr.length; i++) {
    let winstate = winarr[i];
    // Check if all three positions in the winning combination are equal to the user's mark
    if (
      arr[winstate[0]] === userValue &&
      arr[winstate[1]] === userValue &&
      arr[winstate[2]] === userValue
    ) {
      return true;  // Player has won
    }
  }
  return false;  // No win found
};
