const buttons = document.querySelector('#buttons');

function randomIndexOf(array) {
    return Math.floor(Math.random() * array.length);
}

function playGame(maxRounds) {
    const game = {
        roundsCounter: 0,
        humanScore: 0,
        computerScore: 0,
        isOver: false,
        weapons:['rock', 'paper', 'scissors'],
    }

    function updateGame() {
        if (game.roundsCounter === maxRounds) {
            game.isOver = true;
        }    
        else {
            const maxScore = Math.max(game.humanScore, game.computerScore);
            if ( maxScore / maxRounds > 0.5 ) {
                game.isOver = true;
            }
        }
    }

    function logMessage(msg) {
        const messageLog = document.querySelector('#message_log'); 
        const newLog = document.createElement('p');

        newLog.innerText = msg;
        messageLog.appendChild(newLog);
    }

    function updateScoreboard() {
        const scoreboard = document.querySelector('#scoreboard');
        scoreboard.innerText = `You: ${game.humanScore} Computer: ${game.computerScore}`;
    }
    
    function getComputerChoice() {
        return game.weapons[randomIndexOf(game.weapons)];
    }
    
    function handleButtonClick(e) {
        if (game.weapons.includes(e.target.id)) {
            let humanChoice = e.target.id;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
    }

    function playRound(humanChoice, computerChoice) {
        const humanInt = game.weapons.indexOf(humanChoice);
        const computerInt = game.weapons.indexOf(computerChoice);
        const divisorInt = game.weapons.length;

        if (humanChoice != computerChoice) {
            if ( (humanInt + 1) % divisorInt === computerInt ) {
                game.computerScore++;
                logMessage(`You lost! ${computerChoice} beats ${humanChoice}`);
            } else {
                game.humanScore++;
                logMessage(`You won! ${humanChoice} beats ${computerChoice}`);
            }
            game.roundsCounter++;
            updateGame();
            updateScoreboard();
        } else {
            logMessage(`It's a tie! You both chose ${humanChoice}`);
        }

        if (game.isOver) {
            if (game.humanScore > game.computerScore) {
                logMessage('Congratulations! You won the game!');
            } else {
                logMessage('You lost the game. It sucks to suck.');
            }

            buttons.removeEventListener('click', handleButtonClick);
        }
    }

    buttons.addEventListener('click', handleButtonClick); 
}

playGame(5);

