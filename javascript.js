let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
            num = Math.random()
            if (num>0.66) {
                return "rock";
            } else if (num>0.33) {
                return "paper";
            } else {
                return "scissors";
            }
        }


function getHumanChoice() {
    let humanAnswer = prompt("Enter either rock, paper or scissors: ");
    return humanAnswer;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        return console.log("It's a tie, both picked "+humanChoice);
    } else if (humanChoice=="paper" && computerChoice=="rock") {
        humanScore++;
        return console.log("you win, "+humanChoice +" beats "+ computerChoice);

    }
    else if (humanChoice=="rock" && computerChoice=="scissors") {
        humanScore++;
        return console.log("you win, "+humanChoice +" beats "+ computerChoice);

    }
    else if (humanChoice=="scissors" && computerChoice=="paper") {
        humanScore++;
        return console.log("you win, "+humanChoice +" beats "+ computerChoice);

    }
    else {
        computerScore++;
        return console.log("you lose, "+computerChoice+" beats " + humanChoice);
    }


    
}


function playGames() {
    for (let i=0; i<5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)

    }
    if (humanScore>computerScore) {
        console.log("Congratulations, you beat the game :). Refresh to play again.")
    } else if (humanScore<computerScore) {
        console.log("Oopsies, you lost :(. Refresh to try again. ")
    } else console.log("It's a tie, would you like to play again? ()_(). Just refresh the page")


}




playGames();