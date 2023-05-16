let difficultyValue = 1;
let userOption;
let youScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const difficulty = document.querySelector(".switch");
const score = document.querySelector(".score");

function computerChoice() {
    if (difficultyValue) {
        let random = Math.floor(Math.random() * 10) % 3;

        switch (random) {
            case 0:
                alert("Computer chose rock");
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
                alert("Computer chose paper");
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
                alert("Computer chose scissors");
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
        computerScore++;
    }
}

function updateScore() {
    score.textContent = `You: ${youScore} | Computer: ${computerScore}`;
}

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

