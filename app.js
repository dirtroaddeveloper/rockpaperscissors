let humanScore = 0, compScore = 0;
let choice = document.querySelector(".choices");
let winner = document.querySelector(".winner");
let score = document.querySelector(".score");
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
        winner.textContent = "You lose!!!! paper beats rock!!!!";
        return "c";
    } else if(humanChoice == r && compChoice == s) {
        winner.textContent = "You win!!!! Rock beats scissors!!!!";
        return "p";
    } else if(humanChoice == p && compChoice == r) {
        console.log("You win!!!! paper beats rock!!!!");
        return "p";
    } else if(humanChoice == p && compChoice == s) {
        winner.textContent = "You lose!!!! scissors beats paper";
        return "c";
    } else if(humanChoice == s && compChoice == r) {
        winner.textContent = "You lose!!!! Rock beats scissors!!!!";
        return "c";
    } else {
        winner.textContent = "You win!!!! scissors beats paper";
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

        score.textContent = `Score is player: ${humanScore} - Computer: ${compScore}`;
    

    
}


choice.addEventListener("click" , (e) => {
        console.log(e.target.id);


        
        playGame(e);
        if(endCount == 4) {
            
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
            if(humanScore > compScore) {
                score.textContent = "";
                winner.textContent = "You Win!!!!";
                
            } else {
                score.textContent = "";
                winner.textContent = "You Lose!!!!";
            }
            
        }
        endCount += 1;
        console.log(endCount);
});