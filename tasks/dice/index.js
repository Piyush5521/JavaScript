// var randomNumber1 = Math.random();
//     randomNumber1 = randomNumber1 * 6;
//     randomNumber1 = (randomNumber1 + 1);
//     randomNumber1 = Math.floor(randomNumber1);


var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * 6;
    randomNumber1 = (randomNumber1 + 1);
    randomNumber1 = Math.floor(randomNumber1);

var image = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 6;
    randomNumber2 = (randomNumber2 + 1);
    randomNumber2 = Math.floor(randomNumber2);

var image2 = "images/dice"+randomNumber2+".png";

document.querySelector("img.img1").setAttribute("src", image);
document.querySelector("img.img2").setAttribute("src", image2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText="🚩 Player 1 Wins";
}

else if (randomNumber1 < randomNumber2 ){
    document.querySelector("h1").innerText="Player 2 Wins 🚩";
}

else {
    document.querySelector("h1").innerText="Draw!";
}
