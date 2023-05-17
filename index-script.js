let difficultyValue = 1;
let userOption;
let youScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const difficulty = document.querySelector(".switch");
const score = document.querySelector(".score");
const choiceImage = document.querySelector(".computerChoice");
const reset = document.querySelector(".resetScore");

function computerChoice() {
    if (difficultyValue) {
        let random = Math.floor(Math.random() * 10) % 3;

        switch (random) {
            case 0:
                if (userOption == 0) {
                    alert("You made a draw!");
                }
                else if (userOption == 1) {
                    alert("You won!");
                    youScore++;
                }
                else {
                    alert("You lost!");
                    computerScore++;
                }
                break;
            case 1:
                if (userOption == 0) {
                    alert("You lost!");
                    computerScore++;
                }
                else if (userOption == 1) {
                    alert("You made a draw!");
                }
                else {
                    alert("You won!");
                    youScore++;
                }
                break;
            case 2:
                if (userOption == 0) {
                    alert("You won!");
                    youScore++;
                }
                else if (userOption == 1) {
                    alert("You lost!");
                    computerScore++;
                }
                else {
                    alert("You made a draw!");
                }
                break;
            default:
                break;
        }

        showComputerChoice(random);
    }
    else {
        switch (userOption) {
            case 0:
                alert("Computer chose paper, so you lost!");
                break;
            case 1:
                alert("Computer chose scissors, so you lost!");
                break;
            case 2:
                alert("Computer chose rock, so you lost!");
                break;
            default:
                break;
        }
        showComputerChoice((userOption + 1) % 3);
        computerScore++;
    }
}

function updateScore() {
    score.textContent = `You: ${youScore} | Computer: ${computerScore}`;
}


function showComputerChoice(value){

    if(value == 0) {
        choiceImage.src = "./Images/Rock.png";
    }
    else if(value == 1) {
        choiceImage.src = "./Images/Paper.png";
    }
    else if(value == 2) {
        choiceImage.src = "./Images/Scissors.png";
    }    
}

function formatImage(){
    choiceImage.style.height = "50px";
    choiceImage.style.position = "absolute";
    choiceImage.style.marginTop = "500px";
}

choiceImage.src = "./Images/Logo.png";
formatImage();

difficulty.addEventListener("change", () => {
    difficultyValue = !difficultyValue;
});

rock.addEventListener("click", () => {
    userOption = 0; //rock
    computerChoice();
    updateScore();
});

paper.addEventListener("click", () => {
    userOption = 1; //paper
    computerChoice();
    updateScore();
});

scissors.addEventListener("click", () => {
    userOption = 2; //scissors
    computerChoice();
    updateScore();
});

reset.addEventListener("click", () => {
    youScore = 0;
    computerScore = 0;
    updateScore();
});
