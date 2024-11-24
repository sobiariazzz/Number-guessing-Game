let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const restart = document.getElementById("restart");


checkButton.onclick = () => {
 const guess = Number(guessInput.value);

 if (guess<1 || guess>100) {
    result.textContent = 'Enter a number between 1 to 100';
    result.style.color= "red";
 }
 else if (guess === randomNumber){
    result.textContent = "Congrats !! You Win.."
    result.style.color= "blue";
    checkButton.disabled = true;
    restart.style.display = "block";

 }
 else {
    result.textContent = guess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
    result.style.color = "brown";

 }
        guessInput.value = ""; // Clear input
        guessInput.focus();   // Refocus input
};
restart.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    checkButton.disabled = false;
    restart.style.display = "none";
    guessInput.focus();
};