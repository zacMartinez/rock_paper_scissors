const buttons = document.querySelector('#buttons');

function randomIndexOf(array) {
    return Math.floor(Math.random() * array.length);
}

function playGame(maxRounds) {
    const game = {
        roundsCounter: 0,
        humanScore: 0,
        computerScore: 0,
        isWinner: false,
        update: updateGame,
    }
    const weapons = ['rock', 'paper', 'scissors'];
    
    function updateGame() {
        console.table(game);
    }

    function logMessage(msg) {
        const messageLog = document.querySelector('#message_log'); 
        const newLog = document.createElement('p');

        newLog.innerText = msg;
        messageLog.appendChild(newLog);
    }

    function updateScoreboard() {
        const scoreboard = document.querySelector('#scoreboard');
        scoreboard.innerText = `You: ${game.humanScore}, Computer:${game.computerScore}`;
    }
    
    function getComputerChoice() {
        return weapons[randomIndexOf(weapons)];
    }

    function playRound(humanChoice, computerChoice) {
        const humanChoiceInt = weapons.indexOf(humanChoice);
        const computerChoiceInt = weapons.indexOf(computerChoice);

        if (humanChoice != computerChoice) {
            if ( (humanChoiceInt + 1) % weapons.length === computerChoiceInt ) {
                game.computerScore++;
                logMessage(`You lost! ${computerChoice} beats ${humanChoice}`);
            } else {
                game.humanScore++;
                logMessage(`You won! ${humanChoice} beats ${computerChoice}`);
            }
            game.roundsCounter++;
            updateScoreboard();
        } else {
            logMessage(`It's a tie! You both chose ${humanChoice}`);
        }
    }

    buttons.addEventListener('click', (e) => {
        if (weapons.includes(e.target.id)) {
            let humanChoice = e.target.id;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
    }); 
}

playGame(5);

