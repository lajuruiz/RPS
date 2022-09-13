let boardInfo = {
    winner: null,
    currentPlayer: "player1",
    counter: {
        "player1": 0,
        "player2": 0,
    },
    prevAction: null,
    getOtherPlayer: function() {
        return this.currentPlayer === "player2"? "player1": "player2"
    }
};

let rockAction = document.getElementById("rockAction");
let paperAction = document.getElementById("paperAction");
let scissorsAction = document.getElementById("scissorsAction");
let resetButton = document.getElementById("reset");

function changeTurn() {
    boardInfo.currentPlayer = boardInfo.getOtherPlayer();
    showCurrentStatus();
}

function showCurrentStatus() {
    document.getElementById(boardInfo.currentPlayer).classList.add("active");
    document.getElementById(boardInfo.getOtherPlayer()).classList.remove("active");

    // get player1 and player2 buttons and set vals from boardInfo.counter[player]

    document.getElementById("player1").innerText="player 1: "+ boardInfo.counter["player1"]
    document.getElementById("player2").innerText="player 2: "+ boardInfo.counter["player2"]
}

function makeAction(action) {
    if(boardInfo.winner) {
        alert("Please reset the game since there is already a winner for this match.")
        return;
    }

    if(boardInfo.currentPlayer === "player1") {
        boardInfo.prevAction = action;
        changeTurn();
        return;
    }

    let { prevAction } = boardInfo;
    // player 2
    if(action === "rock" && prevAction === "paper") {
        boardInfo.counter["player1"] += 1
    }
    else if(action === "rock" && prevAction === "scissors") {
        boardInfo.counter["player2"] += 1
    }
    else if(action === "paper" && prevAction === "rock") {
        boardInfo.counter["player2"] += 1
    }
    else if(action === "paper" && prevAction === "scissors") {
        boardInfo.counter["player1"] += 1
    }
    else if(action === "scissors" && prevAction === "rock") {
        boardInfo.counter["player1"] += 1
    }
    else if(action === "scissors" && prevAction === "paper") {
        boardInfo.counter["player2"] += 1
    } else {
        alert("there is not a point in this turn")
    }

    changeTurn();

    for(player in  boardInfo.counter) {
        if(boardInfo.counter[player] > 1) {
            boardInfo.winner = player;
            alert(`Congrats ${player} you won.`);
            return;
        }
    }

    boardInfo.prevAction = null;
}

function reset (){
    window.location.reload();
}

rockAction.addEventListener("click", () => makeAction("rock"));
paperAction.addEventListener("click", () => makeAction("paper"));
scissorsAction.addEventListener("click", () => makeAction("scissors"));
resetButton.addEventListener("click" , reset);

//contador

