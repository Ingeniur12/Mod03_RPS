/////////////////////////////////////////////////////////////////////////////////////////////
/* ///////////////////////// CIS-255 MOD-03 ROCK,PAPER, AND SCISSORS GAME ////////////////////
////////////////////////////////////// CREATED BY NORMAN J. ///////////////////////////////*/
//////////////////////////////////////////////////////////////////////////////////////////////

function getPlayerChoice() {// FUNCTION TO GET THE PLAYER'S CHOICE BY PROMPTING FOR INPUT
    playerChoice = prompt("Enter your choice: rock, paper, scissors");// PROMPT THE PLAYER TO ENTER THEIR CHOICE
    result = playerChoice.toLowerCase(); // CONVERT THE PLAYER'S CHOICE TO LOWERCASE
    return result;// RETURN THE PLAYER'S CHOICE
  }
  
  
  function getComputerChoice() {// FUNCTION TO GET THE COMPUTER'S CHOICE RANDOMLY FROM OPTIONS
    options = ["rock", "paper", "scissors"];// DEFINE THE AVAILABLE OPTIONS FOR THE COMPUTER'S CHOICE
    computerChoice = options[Math.floor(Math.random() * options.length)];// GENERATE A RANDOM INDEX TO SELECT THE COMPUTER'S CHOICE FROM THE OPTIONS ARRAY
    return computerChoice;// RETURN THE COMPUTER'S CHOICE
  }
  
  function playRound(playerChoice, computerChoice) {// FUNCTION TO PLAY A ROUND OF ROCK-PAPER-SCISSORS GAME
    options = ["rock", "paper", "scissors"];// DEFINE THE AVAILABLE OPTIONS FOR THE COMPUTER'S CHOICE
  
    if (!options.includes(result)) {//CONDITIONAL STATEMENT FOR INVALID INPUT
      return "INVALID INPUT!";// INVALID INPUT FROM THE PLAYER
    }
    else if (playerChoice === computerChoice) {
      return "It's a tie.";// PLAYER AND COMPUTER MADE THE SAME CHOICE
    }
  
    else if (//CONDITIONAL STATEMENTS FOR PLAYER WINS
      (playerChoice === "rock" && computerChoice === "scissors") ||//ROCK VS SCISSORS
      (playerChoice === "paper" && computerChoice === "rock") ||//PAPER VX ROCK
      (playerChoice === "scissors" && computerChoice === "paper")// SCISSORS VS PAPER
    ) {
      return "You win!";// PLAYER WINS THE ROUND
    }
  
    else if (//CONDITIONAL STATEMENTS FOR PLAYER LOSSES
      (playerChoice === "rock" && computerChoice === "paper") ||// ROCK VS PAPER
      (playerChoice === "paper" && computerChoice === "scissors") ||//PAPER VS SCISSORS
      (playerChoice === "scissors" && computerChoice === "rock")//SCISSORS VS ROCK
    ) {
      return "You lose!";// PLAYER LOSES THE ROUND
    }
  
  }
  
  function countGame() {// FUNCTION TO COUNT THE GAME AND DETERMINE THE WINNER
    playerScore = 0;// INITIALIZE THE PLAYER'S SCORE
    computerScore = 0;// INITIALIZE THE COMPUTER'S SCORE
  
    for (i = 0; i < 5; i++) {
      playerChoice = getPlayerChoice();// GET THE PLAYER'S CHOICE
      computerChoice = getComputerChoice();// GET THE COMPUTER'S CHOICE
  
      result = playRound(playerChoice, computerChoice);// PLAY A ROUND OF THE GAME
      console.log(result);// DISPLAY THE RESULT OF THE ROUND
  
      if (result === "You win!") {
        playerScore++;// INCREMENT THE PLAYER'S SCORE
      } else if (result === "You lose!") {
        computerScore++;// INCREMENT THE COMPUTER'S SCORE
      }
    }
  
    console.log(`Final Result: Player: ${playerScore} and Computer: ${computerScore}`);//DISPLAY FINAL RESULTS
  
    if (playerScore < computerScore) {//CONDITIONAL STATEMENTS TO DETERMINE OVERALL WINS
      console.log("YOU WON!!");// PLAYER WINS THE GAME
    }
    else if (playerScore > computerScore) {//CONDITIONAL STATEMENTS TO DETERMINE OVERALL LOSSES
      console.log("YOU LOST!!");// PLAYER LOSES THE GAME
    }
    else {//CONDITONAL STATEMENT FOR TIES
      console.log("YOU BOTH LOST!!!");// IT'S A TIE IN THE GAME
    }
  }
  
  countGame();// START THE GAME AND COUNT THE SCORE
  