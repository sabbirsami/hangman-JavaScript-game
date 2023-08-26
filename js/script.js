const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guesses-text b");
const wordDisplay = document.querySelector(".word-display");

let currentWord,
    wrongGuessCount = 0;
const maxGuesses = 6;

const getRandomWord = () => {
    const { word, hint } =
        wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word
        .split("")
        .map(() => `<li class="letter"></li>`)
        .join("");
};

const initGame = (button, clickedLetter) => {
    // CHECKING IF clickedLetter IS EXIST ON THE currentWord
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay
                    .querySelectorAll("li")
                    [index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
    }
    guessesText.innerText = `${wrongGuessCount}/ ${maxGuesses}`;
};

// CREATE KEYBOARD BUTTON
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) =>
        initGame(e.target, String.fromCharCode(i))
    );
}

getRandomWord();

// console.log(String.fromCodePoint(9733)); Output: "★"
