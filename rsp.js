const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


// Below code generate user selection via button click then runs all functions // 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = 'User Choice: ' +  userChoice
generateComputerChoice()
generateResult()
}))


// below code create computer choices randomly // 
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1 ) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2 ) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3 ) {
        computerChoice = 'Scissors'
    }
computerChoiceDisplay.innerHTML = 'Computer Choice: ' + computerChoice
}

 //below code compares results and displays winner// 

function generateResult() {
    if (computerChoice === userChoice){
        result = 'Draw!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'You Lose!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You Lose!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'You Lose!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Win!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You Win!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Lose!'
    }
    
    resultDisplay.innerHTML = 'Result: ' + result
}


