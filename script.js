let playingBoard = document.getElementById("game-board");
let playingSquares = document.getElementsByClassName("game-square");
let reset = document.getElementById("button-play-again");
let players = ["X","O"];

function toggleTurns(){
    if(players[1]){
        return players[0]
    } else {
        return players[1];
    }
}

function buttonReset(){
    for(let i = 0; i < playingSquares.length;i++){
        if(playingSquares[i].textContent == players[0] && players[1]){
            playingSquares[i].textContent = " ";
        }
    }
}

for(let i = 0; i < playingSquares.length; i++){
    function markingSquare(){
        playingSquares[i].textContent = toggleTurns(players[1]);
        console.log(playingSquares[i]);
    }
    playingSquares[i].addEventListener('click', markingSquare)
}


reset.addEventListener("click", buttonReset);