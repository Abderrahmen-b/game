function playGame(userChoice) {
    var computerChoice = getComputerChoice();
    var result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
}

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
               (userChoice === 'paper' && computerChoice === 'rock') || 
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(userChoice, computerChoice, result) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `You chose: ${userChoice}<br>Computer chose: ${computerChoice}<br>${result}`;
}
