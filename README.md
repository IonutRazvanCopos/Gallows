# Gallows

Hangman Game (or Gallows)
Overview
Hangman is a classic word-guessing game where the player attempts to guess a secret word, one letter at a time, within a limited number of guesses. This project is a web-based implementation of the game using HTML, CSS, and JavaScript.

Features
Random Word Selection: Each game starts with a randomly selected word from a predefined list.
Interactive Keyboard: Players can click on letters to make guesses.
Guess Tracking: Correct guesses reveal the letter's position(s) in the word, while incorrect guesses are tracked and displayed.
Game Over Display: When the player either guesses the word correctly or runs out of guesses, a game over message is displayed with an option to play again.
Responsive Design: The game layout adjusts for various screen sizes, making it playable on both desktop and mobile devices.

How to Play
Start a New Game: A random word will be selected and displayed as a series of blank spaces.
Make a Guess: Click on the letters in the on-screen keyboard to guess a letter.
Track Your Guesses:
If the guessed letter is in the word, it will be revealed in the correct position(s).
If the guessed letter is not in the word, it will count as a wrong guess.
Win or Lose:
Win the game by correctly guessing all the letters in the word.
Lose the game if you reach the maximum number of wrong guesses (7).

Code Explanation

HTML
The HTML structure consists of three main parts:

A display area for the word (.word-display).
A section showing the number of remaining guesses (.lives-text).
An interactive keyboard (.keyboard).

CSS
The CSS styles the game elements, ensuring a clear and user-friendly interface.

JavaScript
The JavaScript code handles the game logic, including:

Selecting a random word.
Updating the display based on user guesses.
Checking for win/lose conditions.
Resetting the game.
Key Functions
getRandomWord: Selects a random word from the list and initializes the display.
gameOver: Displays a message indicating whether the player won or lost, and provides a button to restart the game.
startNewGame: Resets the game state and UI for a new game.
initGame: Handles letter guesses, updates the display, and checks for win/lose conditions.

Acknowledgements
Inspired by the classic Hangman game.
Built with love and JavaScript.
