let userChoice;
let validator = ["rock","paper","scissors"]
let choices = ["paper","rock","scissors","paper","rock"];
let wins = 0;
let loses = 0;

for (let index = 0; index < 6; index++) {

    
    if (index === 5) {
        switch (true) {
            case wins > loses:
                alert("you win!");
                break;
            case wins === loses:
                alert("draw!");
                break;
            case wins < loses:
                alert("you lose!");
                break;
            default:
                break;
        }
    }
    if (index < 5) {
        gameRound(index);
    } else {
        console.log(`You won ${wins} times, I won ${loses} times and we drew ${5 - (wins + loses)} times`)
    }
}

function gameRound(gameRoundNumber) {

    userChoice = prompt(`let's play rock, paper, scissors!!, Round ${gameRoundNumber+1}!`);
 
//validates user response
//gets a random number to decide if computer is winning or losing
//gets a response of rock paper scissor based on game status and user response

for (let index = 0; index < choices.length + 1; index++) {
    if (index === validator.length) {
        console.log("invalid input");
        gameRound(gameRoundNumber);
    } else
    if (userChoice.toLocaleLowerCase() === validator[index]) {
        let decider = getRandomInt(3);
        let computerChoice = getComputerChoice(userChoice,decider)
        switch (decider) {
            case 0:
                console.log(`I chose ${computerChoice}`);
                console.log("you lost!");
                loses ++;
                break;
            case 1:
                console.log(`I chose ${computerChoice}`);
                console.log("draw!");
                break;
            case 2:
                console.log(`I chose ${computerChoice}`);
                console.log("you won!");  
                wins ++;                    
                break;
        
            default:
                break;
        }
        break;
    }
}
   
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(userChoice,computerChoice) {
    let computerChoiceString = "";
    switch (userChoice.toLocaleLowerCase()) {
        case "rock":
            computerChoiceString = choices[computerChoice];
            break;
        case "paper":
            computerChoiceString = choices[2+computerChoice];
            break;
        case "scissors":
            computerChoiceString = choices[1+computerChoice];
            break;
        default:
            break;
    }
    return computerChoiceString;
}