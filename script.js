function getComputerChoice () {
    /*
        CREATE variable n

        CREATE random number from 1-3 and store that value in n

        IF n is equal to 1 then choose rock
        ELSIF  n is equal to 2 then choose paper
        ELSE choose scissors
    */

    let n = Math.floor(Math.random() * 3);

    return  n == 1 ? "Rock" 
          : n == 2 ? "Paper"
          : "Scissors";
}

function getHumanChoice () {
    /* 
        CREATE variable input

        PROMPT user with message: 
            "Enter your choice, 1: Rock, 2: Paper, 3: Scissors"
        
        STORE value from prompt in input

        CONVERT input to a number

        IF input is equal to 1 then return rock
        ELSEIF input is equal to 2 then return paper
        ELSE return scissors
    */

    let promptMessage = `Enter your choice:\n 1 for "Rock", 2 for "Paper", and 3 for "Scissors".`;
    let inputStr = prompt(promptMessage);
    let inputInt = +inputStr;

    return inputInt == 1 ? "Rock" 
         : inputInt == 2 ? "Paper"
         : "Scissors";
}