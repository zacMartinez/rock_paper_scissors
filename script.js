const humanScore = 0;
const computerScore = 0;

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