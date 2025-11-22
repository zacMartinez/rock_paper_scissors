function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getHumanChoice(pattern) {
    let inputValid = false;
    let inputString = prompt('Enter your choice: ');
    
    while (inputValid == false) {
        if (pattern.test(inputString)) {
            inputValid = true;
            return inputString.toLowerCase();
        } else {
            inputString = prompt('Please try again: ')
        }
    }
}

function playGame(weapons, maxRounds) {
    const weaponCount = weapons.length;
    const pattern = new RegExp(`\\b(${weapons.join('|')})\\b`, `i`);
    let roundsCounter = 0;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanChoiceInt = weapons.indexOf(humanChoice);
        const computerChoiceInt = weapons.indexOf(computerChoice);
        // console.log(humanChoiceInt, computerChoiceInt);

        let isWinner = false;
        if ( humanChoiceInt === computerChoiceInt ) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
        } else if ( (humanChoiceInt + 1) % weaponCount === computerChoiceInt ) {
            computerScore++;
            isWinner = true;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        } else {
            humanScore++;
            isWinner = true;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }

        console.log(`The score is; You: ${humanScore}, Computer: ${computerScore}`);
        return isWinner;
    }

    let isWinner = false;
    while (roundsCounter < maxRounds) {
        isWinner = playRound( getHumanChoice(pattern), getComputerChoice(weapons) );
        
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

playGame(['rock', 'paper', 'scissors'], 5);