const values = {"rock": 1,"paper": 2,"scissors": 3};

function getRandomKey(obj) {
    const keys = Object.keys(obj);
    const n = Math.floor(Math.random() * keys.length);

    return keys[n];
}

function getComputerChoice() {
    // SET variable n to a random number from 0 to 2
    // SET variable keys to an array of the keys from the values object
    // RETURN the key with the index of n

    const n = Math.floor(Math.random() * 3);
    const keys = Object.keys(values);

    return keys[n];
}
    
function getHumanChoice() {
    // INIT inputIsValid to false
    // INIT inputString 

    // WHILE inputIsValid is false
    // IF inputString matches pattern 
    // Set inputIsValid to true
    // ELSE
    // Get user input and assign the value to inputString
    // ENDIF
    // ENDLOOP

    // RETURN inputString converted to lowercase

    let inputIsValid = false;
    let inputString = prompt("Enter your choice:");
    let pattern = /\b(rock|paper|scissors)\b/i; // I used chatgpt for this

    while (inputIsValid == false) {
        if (pattern.test(inputString)) {
            inputIsValid = true;
        } else {
            inputString = prompt("Please try again:")
        }
    }

    return inputString.toLowerCase();
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

    function playRound(humanChoice, computerChoice) {
        
        // SET variable humanValue to the corresponding value from the values object
        // SET variable computerValue to the corresponding value from the values object
        // SET variable outcomeValue to humanValue - computerValue % 3
        
        // IF the outcomValue is equal to 1
        //     increment humanScore by 1
        //     PRINT victory message string template
        // ELSIF the outcomeValue is equal to 2 or - 1
        //     increment computerScore by 1
        //     PRINT defeat message string template
        // ELSE
        //     PRINT tie message string template
        
        // PRINT scoreboard string template
        
        const humanValue = values[humanChoice];
        const computerValue = values[computerChoice];
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
    
    const maxRounds = 5;
    let roundsCounter = 0;
    let humanScore = 0;
    let computerScore = 0;
    let isWinner = false;
    
    while (roundsCounter < maxRounds) {
        isWinner = playRound(getHumanChoice(), getComputerChoice());

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