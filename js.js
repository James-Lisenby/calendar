var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("currentDay").innerHTML = today;
// Displays the date and time in the jumbotron.

const button = document.querySelector("button");
button.addEventListener('click', getInputValue);

function getInputValue() {
    let inputVal = document.getElementById("userInput").value; 
    console.log(inputVal);
    document.getElementById("userInput").innerHTML = inputVal;
}