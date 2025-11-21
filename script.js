function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);    
    return array[randomIndex];
}

function getHumanChoice(pattern) {
    let inputValid = false;
    let inputString = prompt('Enter your choice: '); 

    while (inputValid == false) {
        if ( pattern.test(inputString) ) {
            inputValid = true;
            return inputString.toLowerCase();
        } else {
            inputString = prompt('Please try again: ')
        }
    }
}

function playGame() {
    const weapons = ['rock', 'paper', 'scissors'];
    const pattern = new RegExp(`\\b(${weapons.join('|')})\\b`, 'i');
    const maxRounds = 5;
    let roundsCounter = 0;
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {        
        const humanValue = weapons.indexOf(humanChoice);
        const computerValue = weapons.indexOf(computerChoice);
        const outcomeValue = humanValue - computerValue % 3;
        let isWinner = false;
        
        if (outcomeValue == 1) {
            humanScore++;
            isWinner = true;
            console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
        } else if (outcomeValue == 2 || outcomeValue == -1) {
            computerScore++;
            isWinner = true;
            console.log(`You lost. ${computerChoice} beats ${humanChoice}.`);
        } else {
            isWinner = false;
            console.log(`It's a tie. Let's try again!`);
        }
        
        console.log(`The score is, You: ${humanScore}, Computer: ${computerScore}`);
        return isWinner;
    }
    
    let isWinner = false;
    while (roundsCounter < maxRounds) {
        isWinner = playRound(getHumanChoice(pattern), getComputerChoice(weapons));
        
        let leadingScore = Math.max(humanScore, computerScore);
        if (isWinner) {
            roundsCounter++;

            if (leadingScore / maxRounds > 0.5) { // End game early if lead cannot be recovered
                break;
            }
        }
    }
    
    if (humanScore > computerScore) {
        console.log(`Yay! You won the game!`);
    } else {
        console.log(`Sorry, you lost the game.`);
    }
}