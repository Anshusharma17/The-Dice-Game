var play1 = Math.ceil(Math.random() * 6);
var play2 = Math.ceil(Math.random() * 6);

document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/dice" + play1 + ".png");
document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + play2 + ".png");

if (play1 > play2) {
  document.getElementById("wins").innerHTML = "🚩 Player 1 Wins!";
} else if (play1 < play2) {
  document.getElementById("wins").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.getElementById("wins").innerHTML = "Draw";
}
