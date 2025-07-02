let humanScore = 0, compScore = 0;




playGame();

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    if(rand == 1) {
        return "rock";
    } else if(rand == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    return prompt("What is your choice rock? paper? or scissors?").toLowerCase();
}

function playRound(humanChoice, compChoice) {
    
    const r = "rock";
    const p = "paper";
    const s = "scissors";

    if(humanChoice == r && compChoice == p) {
        console.log("You lose!!!! paper beats rock!!!!");
        return "c";
    } else if(humanChoice == r && compChoice == s) {
        console.log("You win!!!! Rock beats scissors!!!!");
        return "p";
    } else if(humanChoice == p && compChoice == r) {
        console.log("You win!!!! paper beats rock!!!!");
        return "p";
    } else if(humanChoice == p && compChoice == s) {
        console.log("You lose!!!! scissors beats paper");
        return "c";
    } else if(humanChoice == s && compChoice == r) {
        console.log("You lose!!!! Rock beats scissors!!!!");
        return "c";
    } else {
        console.log("You win!!!! scissors beats paper");
        return "p";
    }


}


function playGame() {

    for(let i = 0; i < 5; i++) {

        let userChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        let decision = playRound(userChoice, compChoice);

        if(decision == "p") {
            humanScore += 1;
        } else {
            compScore += 1;
        }

        console.log(`Score is player: ${humanScore} - Computer: ${compScore}`);
    }

    
}