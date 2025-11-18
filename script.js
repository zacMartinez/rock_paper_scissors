function getRandomInt(max) {
    return Math.floor((Math.random * max));
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

    return  n == 1 ? "Rock" 
          : n == 2 ? "Paper"
          : "Scissors";
}