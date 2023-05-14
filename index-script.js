let option;
let difficulty;

function getDifficulty() {
    difficulty = prompt("Rock, Paper, Scissors! Choose the difficulty! (normal, impossible)");
    validDifficulty();
}

function getOption() {
    option = prompt("You chose the difficulty, now you have to choose one from the following: Rock, Paper or Scissors!");
    validOption();
}

function validDifficulty() {
    switch (difficulty.toLowerCase()) {
        case "normal":
            alert("You choose the normal difficulty");
            break;
        case "impossible":
            alert("You choose the wrong difficulty, you should have chose the normal one");
            break;
        default:
            alert("Invalid choice, please try again");
            getDifficulty();
            break;
    }
}

function validOption() {
    switch (option.toLowerCase()) {
        case "rock":
            alert("You choose rock");
            break;
        case "paper":
            alert("You choose paper");
            break;
        case "scissors":
            alert("You choose scissors");
            break;
        default:
            alert("Invalid choice, please try again");
            getOption();
            break;
    }
}

function computerChoice() {
    if (difficulty.toLowerCase() == "normal") {
        let random = Math.floor(Math.random() * 10) % 3;

        switch (random) {
            case 0:
                alert("Computer chose rock");
                if (option.toLowerCase() == "rock") {
                    alert("You made a draw!");
                }
                else if (option.toLowerCase() == "paper") {
                    alert("You won!");
                }
                else {
                    alert("You lost!");
                }
                break;
            case 1:
                alert("Computer chose paper");
                if (option.toLowerCase() == "rock") {
                    alert("You lost!");
                }
                else if (option.toLowerCase() == "paper") {
                    alert("You made a draw!");
                }
                else {
                    alert("You won!");
                }
                break;
            case 2:
                alert("Computer chose scissors");
                if (option.toLowerCase() == "rock") {
                    alert("You won!");
                }
                else if (option.toLowerCase() == "paper") {
                    alert("You lost!");
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
        switch (option.toLowerCase()) {
            case "rock":
                alert("Computer chose paper, so you lost!")
                break;
            case "paper":
                alert("Computer chose scissors, so you lost!")
                break;
            case "scissors":
                alert("Computer chose rock, so you lost!")
                break;
            default:
                break;
        }
    }
}

function replay() {
    let response = prompt("Do you want to play again?");

    if (response.toLowerCase() == "yes") {
        play();
    }
    else if (response.toLowerCase() == "no") {
        alert("Thanks for playing!");
    }
    else {
        alert("Respond to the fking question!");
        replay();
    }
}

function play() {
    getDifficulty();
    getOption();
    computerChoice();
    replay();
}

 play();

