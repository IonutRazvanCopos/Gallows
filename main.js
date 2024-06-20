const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".lives-text b");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord, correctLetters = [], wrongGuessCount = 0, correctGuessCount = 0;
const maxGuesses = 7;

const getRandomWord = () => {
    const { word } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

const gameOver = (isVictory) => {
    const gameOverDiv = document.createElement("div");
    gameOverDiv.innerText = isVictory ? "You win!" : "You lose!";
    gameOverDiv.classList.add("game-over");
    document.body.appendChild(gameOverDiv);

    const playAgainButton = document.createElement("button");
    playAgainButton.innerText = "Play Again";
    playAgainButton.style.backgroundColor = "yellow";
    playAgainButton.style.color = "black";
    playAgainButton.style.padding = "10px 20px";
    playAgainButton.style.borderRadius = "5px";
    playAgainButton.style.border = "none";
    playAgainButton.style.cursor = "pointer";
    playAgainButton.style.marginTop = "20px";
    playAgainButton.style.display = "block"; 
    playAgainButton.style.marginLeft = "auto";
    playAgainButton.style.marginRight = "auto";
    playAgainButton.addEventListener("click", startNewGame);
    gameOverDiv.appendChild(playAgainButton);
}

const startNewGame = () => {
    const gameOverDiv = document.querySelector(".game-over");
    if (gameOverDiv) {
        gameOverDiv.remove();
    }

    wrongGuessCount = 0;
    correctGuessCount = 0;
    getRandomWord();

    const letterButtons = document.querySelectorAll(".keyboard button");
    letterButtons.forEach(letterButton => {
        letterButton.disabled = false;
        letterButton.style.background = "";
    });

    wordDisplay.querySelectorAll("li").forEach(li => {
        li.classList.remove("guessed");
    });
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
}

const initGame = (button, clickedLetter) => {
    if (wrongGuessCount === maxGuesses || correctGuessCount === currentWord.length) {
        const letterButtons = document.querySelectorAll(".keyboard");
        letterButtons.forEach(letterButton => {
            letterButton.disabled = true;
        });
        return;
    }

    button.disabled = true;
    button.style.background = "#037934";

    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                ++correctGuessCount;
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        ++wrongGuessCount;
    }
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if(wrongGuessCount === maxGuesses) {
        gameOver(false);
    } else if (correctGuessCount === currentWord.length) {
        gameOver(true);
    }
}

for (let i = 97; i <= 122; ++i) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", event => initGame(event.target, String.fromCharCode(i)))
}

getRandomWord();