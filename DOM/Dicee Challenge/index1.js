var randomvariable1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "images/dice" + randomvariable1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

var randomvariable2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "images/dice" + randomvariable2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

//If player 1 wins
if (randomvariable1 > randomvariable2) {
  document.querySelector("h2").innerHTML = "🚩 Play 1 Wins!";
} else if (randomvariable2 > randomvariable1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h2").innerHTML = "Draw!";
}
