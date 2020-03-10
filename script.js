let playingBoard = document.getElementById("game-board");
let playingSquares = document.getElementsByClassName("game-square");
let reset = document.getElementById("button-play-again");
let turnTracker = document.getElementById("turn");
let currentPlayer = "X";
function updateCurrentPlayer(){
    turnTracker.innerText = currentPlayer;
}
updateCurrentPlayer();

function buttonReset() {
  for (let i = 0; i < playingSquares.length; i++) {
    playingSquares[i].textContent = "";
    playingSquares[i].addEventListener("click", markingSquare);
  }
  currentPlayer = "X";
  updateCurrentPlayer();
}

reset.addEventListener("click", buttonReset);

function toggleTurns() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  updateCurrentPlayer();
}

function addListenerToSquares() {
  for (let i = 0; i < playingSquares.length; i++) {
    playingSquares[i].addEventListener("click", markingSquare);
  }
}
function markingSquare() {
  this.innerText = currentPlayer;
  this.removeEventListener("click", markingSquare);
  toggleTurns();
}
addListenerToSquares();