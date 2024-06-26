let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("why bn");
let attempts = 1;
const maxAttempts = 3;

function guess() {
    let userGuess = Number(document.getElementById("txtGuess").value);
    let result = document.getElementById("result");

    if (attempts < maxAttempts) {
        attempts++;
        if (userGuess < randomNumber) {
            result.innerHTML = `The answer is greater than your guess. You have ${maxAttempts - attempts} attempts left.`;
        } else if (userGuess > randomNumber) {
            result.innerHTML = `The answer is less than your guess. You have ${maxAttempts - attempts} attempts left.`;
        } else {
            result.innerHTML = "Congratulations! You are the winner!";
        }
    } else {
        result.innerHTML = `Your number of attempts has exceeded. The correct answer is ${randomNumber}.`;
    }
}

function refresh() {
    attempts = 1;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("why bn");
    document.getElementById("txtGuess").value = "";
    document.getElementById("result").innerHTML = "";
}
