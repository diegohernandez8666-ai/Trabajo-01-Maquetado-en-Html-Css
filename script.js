let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let previousGuesses = [];

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const previousGuessesText = document.getElementById("previousGuesses");
const restartButton = document.getElementById("restartButton");

attemptsText.textContent = "Intentos restantes: " + attempts;

guessButton.addEventListener("click", function () {

    const userGuess = Number(guessInput.value);

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Ingresa un numero entre 1 y 100";
        return;
    }

    previousGuesses.push(userGuess);
    attempts--;

    if (userGuess === randomNumber) {
        message.textContent = "Correcto! Adivinaste el numero";
        finishGame();
    } else if (attempts === 0) {
        message.textContent = "Perdiste! El numero era " + randomNumber;
        finishGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "Te quedaste corto";
    } else {
        message.textContent = "Te pasaste";
    }

    attemptsText.textContent = "Intentos restantes: " + attempts;
    previousGuessesText.textContent =
        "Numeros probados: " + previousGuesses.join(", ");

    guessInput.value = "";
});

restartButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    previousGuesses = [];

    message.textContent = "";
    attemptsText.textContent = "Intentos restantes: " + attempts;
    previousGuessesText.textContent = "";

    guessButton.disabled = false;
    restartButton.classList.add("hidden");
});

function finishGame() {
    guessButton.disabled = true;
    restartButton.classList.remove("hidden");
}