let humanScore = 0, compScore = 0;
let choice = document.querySelector(".choices");
let endCount = 0;
    

    





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


function getHumanChoice(e) {
    
    return e.target.id;
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


function playGame(e) {

    
        let userChoice = getHumanChoice(e);
        console.log("USER CHOICE " + userChoice);
        let compChoice = getComputerChoice();
        let decision = playRound(userChoice, compChoice);

        if(decision == "p") {
            humanScore += 1;
        } else {
            compScore += 1;
        }

        console.log(`Score is player: ${humanScore} - Computer: ${compScore}`);
    

    
}


choice.addEventListener("click" , (e) => {
        console.log(e.target.id);


        
        playGame(e);
        if(endCount == 4) {
            console.log("GAME OVER");
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }
        endCount += 1;
        console.log(endCount);
});