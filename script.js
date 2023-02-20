let luckyNum = Math.floor(Math.random() * 20);
// window.alert(luckyNum);
const GuessInput = document.getElementById("guessNum");
const CheckBtn = document.getElementById("playbtn");
const message = document.getElementById("commentary");
const StartBtn = document.getElementById("btn-start");
const Reset = document.getElementById("resetbtn");
const GameScreen = document.getElementById("gameConsole");

const ScoreCard = document.getElementById("score");
let score = 10;
ScoreCard.textContent = score;

function openFullscreen() {
  if (GameScreen.requestFullscreen) {
    GameScreen.requestFullscreen();
  } else if (GameScreen.webkitRequestFullscreen) {
    /* Safari */
    GameScreen.webkitRequestFullscreen();
  } else if (GameScreen.msRequestFullscreen) {
    /* IE11 */
    GameScreen.msRequestFullscreen();
  }
}

function checkNumber() {
  const userGuess = parseInt(GuessInput.value);

  if (userGuess < 0 || userGuess > 20) {
    message.textContent = "Please Enter a number between 1 and 20";
    return;
  }

  if (userGuess == luckyNum) {
    message.textContent = "Hurray! You Won";
    document.getElementById("congrats").style.display = "block";
    document.getElementById("instruction").textContent = "Correct Answer!";
    document.getElementById("instruct-bg").style.backgroundColor = "green";
    CheckBtn.disabled = true;
  } else {
    score = score - 1;
    ScoreCard.textContent = score;

    if (userGuess > luckyNum) {
      message.textContent = "Your Guess is high";
    }

    if (userGuess < luckyNum) {
      message.textContent = "Your Guess is low";
    }
  }
  if (score < 1) {
    document.getElementById("instruction").textContent = "You Lost! Sorry";
    document.getElementById("instruct-bg").style.backgroundColor = "red";
    CheckBtn.disabled = true;
  }
}

CheckBtn.addEventListener("click", checkNumber);

function StartGame() {
  document.getElementById("firstpage").style.display = "none";
  document.getElementById("full-screen").style.display = "block";
}

StartBtn.addEventListener("click", StartGame);
StartBtn.addEventListener("click", openFullscreen);

Reset.onclick = function () {
  score = 10;
  ScoreCard.textContent = score;
  message.textContent = "Find the magic number...";
  luckyNum = Math.floor(Math.random() * 20);
  document.getElementById("instruct-bg").style.backgroundColor = "unset";
  document.getElementById("instruction").textContent =
    "Numbers between 1 and 20";
  CheckBtn.disabled = false;
  GuessInput.value = "";
  document.getElementById("congrats").style.display = "none";
};
