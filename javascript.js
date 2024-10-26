function getComputerChoice(){
    switch ( Math.floor(Math.random() * 3)){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter your choice");
}

const results = document.querySelector(".results");


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice ?? "null";
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice)  {
        case "rock":
            switch(computerChoice){
                case "rock":
                    results.textContent = "Rock vs Rock... A tie!";
                    return "tie";
                case "paper":
                    results.textContent = "You lose! Paper beats Rock";
                    return "lose";
                case "scissors":
                    results.textContent = "You win! Rock beats Scissors";
                    return "win";
            } 
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    results.textContent = "You win! Paper beats Rock";
                    return "win";
                case "paper":
                    results.textContent = "Paper vs Paper... A tie!";
                    return "tie";
                case "scissors":
                    results.textContent = "You lose! Scissors beats Paper";
                    return "lose";
            } 
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    results.textContent = "You lose! Rock beats Scissors";
                    return "lose";
                case "paper":
                    results.textContent = "You win! Scissors beats Paper";
                    return "win";
                case "scissors":
                    results.textContent = "Scissors vs Scissors... A tie!";
                    return "tie";
            } 
            break;
        default:
            console.log("Bad input!");
            return "bad";
    }
}

let humanScore = 0;
let computerScore = 0;

const humanScoreDiv = document.querySelector(".human");
const computerScoreDiv = document.querySelector(".computer");

function changeScore(roundResult){
    switch(roundResult){
        case "win":
            humanScore++;
            humanScoreDiv.textContent = humanScore
            break;
        case "lose":
            computerScore++;
            computerScoreDiv.textContent = computerScore
            break;
    }
}

const winner = document.querySelector(".winner");
let winnerExists = false;

function evaluateWinner(){
        if(computerScore == 5){
            winner.textContent = "You lose!";
            winnerExists = true;
        }
        else if(humanScore == 5){
            winner.textContent = "You win!";
            winnerExists = true;
        }
}

const buttons = document.querySelectorAll(".select");
buttons.forEach(element => {
    element.addEventListener("click", buttonClick);
});

function buttonClick(e){
    if (!winnerExists){
        let result = playRound(e.target.dataset.game, getComputerChoice());
        changeScore(result);
        evaluateWinner()
    }

}

