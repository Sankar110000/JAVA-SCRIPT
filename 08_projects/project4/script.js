const randNumber = Math.round(Math.random() * 100 + 1);
const form = document.querySelector('form');
const result = document.querySelector('.lowOrHigh');
const input = document.querySelector('input'); 
const prevGuess = document.querySelector('.gusses')
const p = document.querySelector('.message')
const lastRes = document.querySelector('.lastResult')

let remainingGuess = 10;
const gameStart = true;

if(gameStart){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess > 100){
        alert("Please enter number less than hunderd")
    }else if(guess < 1){
        alert("Please enter number more than one")
    }else{
        remainingGuess--;
        lastRes.innerText = remainingGuess;
        if(remainingGuess != 0){
            checkGuess(guess);
            displayGuess(guess);
        }else{
            displayGuess(guess);
            endGame()
        }
    }
}

function checkGuess(guess){
    if(guess === randNumber){
        displayMessage(`Entered the correct number ${guess}`);
    }else{
        input.value =''
        if(guess > randNumber){
            displayMessage(`Guess is too big`);
        }else{
            displayMessage(`Guess is too small`);
        }
    }
}

function displayGuess(guess){
    prevGuess.innerText += `${guess}, `
}

function displayMessage(message){
    result.innerText = message;
}

function endGame(){
    input.value = ''
    input.setAttribute('disabled', '');
    p.innerHTML = '<h2>Game Over, Reached max no. of guesses</h2>'
    gameStart = false;
}