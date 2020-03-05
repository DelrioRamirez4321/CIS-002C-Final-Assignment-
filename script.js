let playingBoard = document.getElementById("game-board");
let playingSquares = document.getElementsByClassName("game-square");
let reset = document.getElementById("button-play-again");
player1= "X";
player2 = "0"

function game(){
    for(let i = 0;i<playingSquares.length;i++){
        playingSquares[i].addEventListener('click', function() {
            playingSquares[i].addEventListener("click", event =>{
                playingSquares[i].textContent = player1;
            } )
        });
    }
}

game()