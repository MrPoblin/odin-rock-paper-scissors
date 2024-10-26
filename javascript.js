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



function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice ?? "null";
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice)  {
        case "rock":
            switch(computerChoice){
                case "rock":
                    console.log("Rock vs Rock... A tie!");
                    return "tie";
                case "paper":
                    console.log("You lose! Paper beats Rock");
                    return "lose";
                case "scissors":
                    console.log("You win! Rock beats Scissors");
                    return "win";
            } 
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    console.log("You win! Paper beats Rock");
                    return "win";
                case "paper":
                    console.log("Paper vs Paper... A tie!");
                    return "tie";
                case "scissors":
                    console.log("You lose! Scissors beats Paper");
                    return "lose";
            } 
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    console.log("You lose! Rock beats Scissors");
                    return "lose";
                case "paper":
                    console.log("You win! Scissors beats Paper");
                    return "win";
                case "scissors":
                    console.log("Scissors vs Scissors... A tie!");
                    return "tie";
            } 
            break;
        default:
            console.log("Bad input!");
            return "bad";
    }
}

let gameLength = 5;

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < gameLength; i++){
        let roundResult = playRound(getHumanChoice(), getComputerChoice());
        while(roundResult == "bad"){
            roundResult = playRound(getHumanChoice(), getComputerChoice());
        }
        switch(roundResult){
            case "win":
                humanScore++;
                break;
            case "lose":
                computerScore++;
                break;
        }
        console.log(`Current score:\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
    }
    console.log(`Game over!`)
    if(humanScore > computerScore){
        console.log(`You won!`);
    }
    else if(computerScore > humanScore){
        console.log(`You lost!`);
    }
    else{
        console.log(`It's a tie!`);
    }
}

playGame();
