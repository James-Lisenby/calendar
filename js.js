var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("currentDay").innerHTML = today;
// Displays the date and time in the jumbotron.




// var saveBtn = getElementById('saveInput')
// addEventListener('click', saveBtn)
// onclick(getInput)

// function getInput(){
//     userInput = getElementById('input').value;
//     console.log(userInput);
// }

const text1 = document.getElementById('input');
const saveBtn = document.getElementById('saveInput');
const userInput = document.getElementsByName('textarea');

function getInput() {
    userInput.innerHTML = text1.value;
    console.log(userInput);
}

saveBtn.addEventListener('click', getInput);