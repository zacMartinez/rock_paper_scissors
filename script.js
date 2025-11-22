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
    const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const weaponCount = weapons.length;
    const pattern = new RegExp(`\\b(${weapons.join('|')})\\b`, 'i');
    const maxRounds = 5;
    let roundsCounter = 0;
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {        
        const humanValue = weapons.indexOf(humanChoice);
        const computerValue = weapons.indexOf(computerChoice);
        const outcomeValue = Math.abs(humanValue - computerValue);
        
        let isWinner = false;
        if (outcomeValue % weaponCount == 0) {
            isWinner = false;
            console.log(`It's a tie. Let's try again!`);
        } else if ((outcomeValue % weaponCount) % 2 === 0) {
            humanScore++;
            isWinner = true;
            console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            isWinner = true;
            console.log(`You lost. ${computerChoice} beats ${humanChoice}.`);
        }   
        
        console.log(`The score is, You: ${humanScore}, Computer: ${computerScore}`);
        return isWinner; // This flag gets used to increment the rounds counter
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