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
    // SET variable maxRounds to 5
    // SET variable roundsCounter to 0
    // SET variable isWinner to false
    
    // WHILE roundsCounter is less than maxRounds
    // IF isWinner
    // increment roundsCounter by 1
    
    // SET variable isWinner to the output of running playRound
    // ENDLOOP 
    
    const weapons = ['rock', 'paper', 'scissors'];
    const pattern = new RegExp(`\\b(${weapons.join('|')})\\b`, 'i');
    const maxRounds = 5;
    let roundsCounter = 0;
    let humanScore = 0;
    let computerScore = 0;
    let isWinner = false;


    function playRound(humanChoice, computerChoice) {
        // SET variable humanValue to the corresponding value from the values object
        // SET variable computerValue to the corresponding value from the values object
        // SET variable outcomeValue to humanValue - computerValue % 3
        
        // IF the outcomValue is equal to 1
        //     increment humanScore by 1
        //     PRINT victory message string template
        // ELSIF the outcomeValue is equal to 2 or -1
        //     increment computerScore by 1
        //     PRINT defeat message string template
        // ELSE
        //     PRINT tie message string template
        
        // PRINT scoreboard string template
        
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
    
    while (roundsCounter < maxRounds) {
        isWinner = playRound(getHumanChoice(pattern), getComputerChoice(weapons));

        if (isWinner) {
            roundsCounter++;
        }
    }
    
    if (humanScore > computerScore) {
        console.log(`Yay! You won the game!`);
    } else {
        console.log(`Sorry, you lost the game.`);
    }
}