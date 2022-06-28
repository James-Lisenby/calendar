var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("currentDay").innerHTML = today;
// Displays the date and time in the jumbotron.


// Remder a block for each hour of the planner.
// for(var i =9; i <= 17; i++) {
// }

// const button = document.querySelector("button");
// button.addEventListener('click', getInputValue);

// function getInputValue() {
//     let inputVal = document.getElementsByClassName("userInput").value; 
//     console.log(inputVal);
//     document.getElementById("userInput").innerHTML = inputVal;
// }
// // Currently function will console log user input. 

let saveBtn = document.getElementsByTagName("button");
let userInput = document.getElementsByTagName("textarea").value;


function getInputValue() {
    let userText = document.getElementsByTagName("textarea").value;
    console.log(userText);

}
