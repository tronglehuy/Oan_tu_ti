var playerSum, computerSum;
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    switch (randomNumber) {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SISSORS";
            break;

    //Return randomNumber;
}

function playRound(playerSelection, computerSelection) {
    let message;
    //if (playerSelection == computerSelection) {
    //    return "Deuce";
    //} else
    let playerNum, computerNum;
    playerSelection = prompt("What's your choice?");
    switch (playerSelection.toUpperCase()) {
        case 'ROCK': 
            playerNum = 1;
            break;
        case 'PAPER': 
            playerNum = 2;
            break;
        case 'SISSORS':
            playerNum = 3;
            break;
    }
    switch (computerSelection.toUpperCase()) {
        case 1: 
            computerNum = 'ROCK';
            break;
        case 2: 
            computerNum = 'PAPER';
            break;
        case 3:
            computerNum = 'SISSORS';
            break;
    }

    
    switch (playerNum - computerNum) {
        case 0:
            message "Deuce. You and computer are {playerSelection}";
            break;
        case 1, -2:
            message "You win. {playerSelection} beat {computerSelection}";
            playerSum++;
            break;
        defaut:
            message "You lose. {computerSelection} beat {playerSelection}";
            computerSum++;
            break;
    }
    return message;
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  function game() {
    let message = ""
    for (let i = 1; i++; i<=5) {
        playRound();
    }
    let message = "You have {playerNum} score. And computer have {computerNum} score";
    if (playerNum > computerNum) {
        message = "You win. " + message;
    } else if (playerNum < computerNum) {
            message = "Computer win. " + message;
    } else message = "Deuce. " + message;
    }
  }
  game(); //gọi game