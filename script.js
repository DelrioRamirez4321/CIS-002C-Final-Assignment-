let playingBoard = document.getElementById("game-board");
let playingSquares = document.getElementsByClassName("game-square");
let reset = document.getElementById("button-play-again");
let turnTracker = document.getElementById("turn");
let currentPlayer = "X";
let xScore = document.getElementById("scoreboard-x");
let oScore = document.getElementById("scoreboard-o");

xScore.innerHTML = 0;
oScore.innerHTML = 0;


function updateCurrentPlayer(){
    turnTracker.innerText = currentPlayer;
}
updateCurrentPlayer();

function buttonReset() {
  for (let i = 0; i < playingSquares.length; i++) {
    playingSquares[i].textContent = "";
    playingSquares[i].addEventListener("click", markingSquare);
    currentPlayer = "X";
    updateCurrentPlayer();
  }
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
  gameWins()
}

function gameWins(){
  if(xWon() == true ){
    alert("X Won");
    xScore.innerHTML++;
  }
  else if (oWon() == true){
    alert("O Won");
    oScore.innerHTML++;
  }

}

function xWon(){
    for(let i = 0; i <= playingSquares.length;i++){
    if(playingSquares[0].textContent =="X" 
      && playingSquares[1].textContent =="X"
      && playingSquares[2].textContent =="X"){
        return true;
    }
    else if(playingSquares[3].textContent =="X"
      && playingSquares[4].textContent =="X"
      && playingSquares[5].textContent =="X"){
        return true;
    }
    else if(playingSquares[6].textContent =="X"
      && playingSquares[7].textContent =="X"
      && playingSquares[8].textContent =="X"){
        return true;
    }
   else if(playingSquares[0].textContent =="X"
      && playingSquares[3].textContent =="X"
      && playingSquares[6].textContent =="X"){
        return true;
    }
    else if(playingSquares[1].textContent =="X"
      && playingSquares[4].textContent =="X"
      && playingSquares[7].textContent =="X"){
        return true;
    }
   else if(playingSquares[2].textContent =="X"
      && playingSquares[5].textContent =="X"
      && playingSquares[8].textContent =="X"){
        return true;
    }
    else if(playingSquares[0].textContent =="X"
      && playingSquares[4].textContent =="X"
      && playingSquares[8].textContent =="X"){
        return true;
    }
   else if(playingSquares[2].textContent =="X"
      && playingSquares[4].textContent =="X"
      && playingSquares[6].textContent =="X"){
        return true;
    }
    else {
      return false;
    }
}

}

function oWon(){
  for(let i = 0; i <= playingSquares.length;i++){
      if(playingSquares[0].textContent == "O"
    && playingSquares[1].textContent == "O"
    && playingSquares[2].textContent == "O"){
      return true;
  }
 else if(playingSquares[3].textContent == "O"
    && playingSquares[4].textContent == "O"
    && playingSquares[5].textContent == "O"){
      return true;
  }
  else if(playingSquares[6].textContent == "O"
    && playingSquares[7].textContent == "O"
    && playingSquares[8].textContent == "O"){
      return true;
  }
 else if(playingSquares[0].textContent == "O"
    && playingSquares[3].textContent == "O"
    && playingSquares[6].textContent == "O"){
      return true;
  }
  else if(playingSquares[1].textContent == "O"
    && playingSquares[4].textContent == "O"
    && playingSquares[7].textContent == "O"){
      return true;
  }
 else if(playingSquares[2].textContent == "O"
    && playingSquares[5].textContent == "O"
    && playingSquares[8].textContent == "O"){
      return true;
  }
  else if(playingSquares[0].textContent == "O"
    && playingSquares[4].textContent == "O"
    && playingSquares[8].textContent == "O"){
      return true;
  }
 else if(playingSquares[2].textContent == "O"
    && playingSquares[4].textContent == "O"
    && playingSquares[6].textContent == "O"){
      return true;
  }
  else {
    return false;
  }
  }

}

function drawGame(){

}

addListenerToSquares();