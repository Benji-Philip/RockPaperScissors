let userChoice;
let choices = ["paper", "rock", "scissors", "paper", "rock"];
let wins = 0;
let loses = 0;
let draws = 0;

let options = document.querySelector(".block-one");
let winsScoreBoard = document.querySelector("#wins");
let winsScore = document.createElement("div");
winsScore.textContent = wins;
winsScoreBoard.appendChild(winsScore);
let losesScoreBoard = document.querySelector("#loses");
let losesScore = document.createElement("div");
losesScore.textContent = loses;
losesScoreBoard.appendChild(losesScore);
let drawsScoreBoard = document.querySelector("#draws");
let drawsScore = document.createElement("div");
drawsScore.textContent = draws;
drawsScoreBoard.appendChild(drawsScore);
let computerChoiceBoard = document.querySelector(".computerChoice");
let computerEmotion = document.createElement("img");
computerEmotion.src = "./assets/smile.png";
computerEmotion.classList.add("button-icon");
computerChoiceBoard.appendChild(computerEmotion);
let computerChoiceEmoji = document.createElement("img");
computerChoiceEmoji.classList.add("button-icon");
let computerChoiceBoardWrapper = document.querySelector(".computer-choice-wrapper");
computerChoiceBoardWrapper.classList.add("align-center");
let computerChoiceText = document.createElement("div");

options.addEventListener("click", (event) => {
  let option = event.target;
  switch (option) {
    case rock:
      computerChoiceBoardWrapper.classList.remove("align-center");
      computerChoiceBoardWrapper.classList.remove("align-right");
      computerChoiceBoardWrapper.classList.add("align-left");
      gameRound("rock");
      break;
    case paper:
      computerChoiceBoardWrapper.classList.add("align-center");
      computerChoiceBoardWrapper.classList.remove("align-right");
      computerChoiceBoardWrapper.classList.remove("align-left");
      gameRound("paper");
      break;
    case scissors:
      computerChoiceBoardWrapper.classList.remove("align-center");
      computerChoiceBoardWrapper.classList.add("align-right");
      computerChoiceBoardWrapper.classList.remove("align-left");
      gameRound("scissors");
      break;
    default:
      break;
  }
});

function gameRound(userChoice) {

  //validates user response
  //gets a random number to decide if computer is winning or losing
  //gets a response of rock paper scissor based on game status and user response
  if (wins > 4 || loses > 4) {
    wins = 0;
    winsScore.textContent = wins;
    winsScoreBoard.appendChild(winsScore);
    loses = 0;
    losesScore.textContent = loses;
    losesScoreBoard.appendChild(losesScore);
    draws = 0;
    drawsScore.textContent = draws;
    drawsScoreBoard.appendChild(drawsScore);
  }
  let decider = getRandomInt(3);
  let computerChoice = getComputerChoice(userChoice, decider);
  switch (decider) {
    case 0:
      console.log(`I chose ${computerChoice}`);
      console.log("you lost!");
      computerChoiceText.textContent = "You Lose!";
      computerChoiceBoardWrapper.appendChild(computerChoiceText);
      loses++;
      losesScore.textContent = loses;
      losesScoreBoard.appendChild(losesScore);
      computerEmotion.src = "./assets/happiness.png";
      computerChoiceEmoji.src = `./assets/${computerChoice}.png`;
      computerChoiceBoard.appendChild(computerEmotion);
      computerChoiceBoard.appendChild(computerChoiceEmoji);
      if (loses === 5) alert("You have lost!!!");
      break;
    case 1:
      console.log(`I chose ${computerChoice}`);
      console.log("draw!");
      computerChoiceText.textContent = "Draw!";
      computerChoiceBoardWrapper.appendChild(computerChoiceText);
      draws++;
      drawsScore.textContent = draws;
      drawsScoreBoard.appendChild(drawsScore);
      computerEmotion.src = "./assets/smile.png";
      computerChoiceEmoji.src = `./assets/${computerChoice}.png`;
      computerChoiceBoard.appendChild(computerEmotion);
      computerChoiceBoard.appendChild(computerChoiceEmoji);
      break;
    case 2:
      console.log(`I chose ${computerChoice}`);
      console.log("you won!");
      computerChoiceText.textContent = "You Won!";
      computerChoiceBoardWrapper.appendChild(computerChoiceText);
      wins++;
      winsScore.textContent = wins;
      winsScoreBoard.appendChild(winsScore);
      computerEmotion.src = "./assets/sad.png";
      computerChoiceEmoji.src = `./assets/${computerChoice}.png`;
      computerChoiceBoard.appendChild(computerEmotion);
      computerChoiceBoard.appendChild(computerChoiceEmoji);
      if (wins === 5) alert("You have won!!!");
      break;

    default:
      break;
  }


}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(userChoice, computerChoice) {
  let computerChoiceString = "";
  switch (userChoice.toLocaleLowerCase()) {
    case "rock":
      computerChoiceString = choices[computerChoice];
      break;
    case "paper":
      computerChoiceString = choices[2 + computerChoice];
      break;
    case "scissors":
      computerChoiceString = choices[1 + computerChoice];
      break;
    default:
      break;
  }
  return computerChoiceString;
}
