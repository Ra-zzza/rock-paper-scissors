let playerScore = 0;
let computerScore = 0;

const p1 = document.createElement('p');
const p2 = document.createElement('p');
let addedScore = document.querySelector("#content");
addedScore.appendChild(p1);
addedScore.appendChild(p2);

const p3 = document.createElement('p');
let addedText1 = document.getElementById("container");
addedText1.appendChild(p3);

function finalScore(){
  if (playerScore >= 5){
  p3.innerHTML = "YOU WIN, CONGRATULATIONS!"
  } else if (computerScore >= 5) {
  p3.innerHTML = "Sorry you lost the game :("
}
}

p1.innerHTML = "you have " + playerScore + " points."
p2.innerHTML = "the computer have " + computerScore +" points."

function playRound(playerSelection){

  const p = document.createElement('p');
  let addedText = document.getElementById("container");
  addedText.appendChild(p);

  const typeOfHand = ["rock","paper","scissors"];
  randomElement = typeOfHand[Math.floor(Math.random() * typeOfHand.length)];
  console.log(randomElement);
  let computerSelection = randomElement;

  if (playerSelection === computerSelection) {
    p.innerHTML = "draw"   
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++
    p.innerHTML ="You Win!! Rock beats Scissors";  
  } else if (playerSelection == 'scissors' && computerSelection == 'paper'){ 
    playerScore++
    p.innerHTML ="You win!!! Scissors beats Paper"
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++
    p.innerHTML ="You Win! Paper beats Rock"
  } else {
    computerScore++
    p.innerHTML ="You Lost! " + computerSelection + " beats " + playerSelection+ ""
  }
  p1.innerHTML = "you have " + playerScore + " points."
  p2.innerHTML = "the computer have " + computerScore +" points."
 finalScore()

}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click',(e) => { playRound('rock')
});
const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', (e) => {
   playRound('paper')
});
const btnScissors = document.querySelector('#btnSissors');
btnScissors.addEventListener('click', (e) => {
  playRound('scissors')
});

