let humanScore = 0;
let computerScore = 0;
const values = {
    "rock": 1,
    "paper": 2,
    "scissors": 3
}

function getComputerChoice () {
    /*
        CREATE variable n

        CREATE random number from 1-3 and store that value in n

        IF n is equal to 1 then choose rock
        ELSIF  n is equal to 2 then choose paper
        ELSE choose scissors
    */

    let n = Math.floor(Math.random() * 3);

    return  n == 1 ? "rock" 
          : n == 2 ? "paper"
          : "scissors";
}

function getHumanChoice () {
    /* 
        INIT inputIsValid to false
        INIT inputString 
        
        WHILE inputIsValid is false
            IF inputString matches pattern 
                Set inputIsValid to true
            ELSE
                Get user input and assign the value to inputString
            ENDIF
        ENDLOOP

        RETURN inputString converted to lowercase
    */

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

function playRound(humanChoice, computerChoice) {
    /*
        SET variable humanValue to the corresponding value from the values object
        SET variable computerValue to the corresponding value from the values object
        SET variable outcomeValue to humanValue - computerValue % 3

        IF the outcomValue is equal to 1
            increment humanScore by 1
            PRINT victory message string template
        ELSIF the outcomeValue is equal to 2 or -1
            increment computerScore by 1
            PRINT defeat message string template
        ELSE
            PRINT tie message string template

        PRINT scoreboard string template
    */
    const humanValue = values[humanChoice];
    const computerValue = values[computerChoice];
    const outcomeValue = humanValue - computerValue % 3;

    if (outcomeValue == 1) {
        humanScore++;
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    } else if (outcomeValue == 2 || -1) {
        computerScore++;
        console.log(`You lost. ${computerChoice} beats ${humanChoice}.`)
    } else {
        console.log(`It's a tie. Let's try again!`);
    }

    console.log(`The score is, You: ${humanScore}, Computer: ${computerScore}`);
}