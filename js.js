var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("currentDay").innerHTML = today;
// Displays the date and time in the jumbotron.

var userTextInput = document.querySelector("#userInput");
var saveBtn = document.getElementsByClassName("#save");


function storeText() {
    saveBtn.addEventLisetener("click");
    console.log("what");
}






// add event listener to "save" button.
// store user input into local storage as a string upon hitting the "save" button.


// retrieve data on page load.

// set if hour is past,cpresent, or future.

