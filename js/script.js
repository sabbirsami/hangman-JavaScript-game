const keyboardDiv = document.querySelector(".keyboard");

// CREATE KEYBOARD BUTTON
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}

// console.log(String.fromCodePoint(9733)); Output: "★"
