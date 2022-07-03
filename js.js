var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("currentDay").innerHTML = today;
// Displays the date and time in the jumbotron.




const text1 = document.getElementById('input-1');
const text2 = document.getElementById('input-2');
const text3 = document.getElementById('input-3');
const text4 = document.getElementById('input-4');
const text5 = document.getElementById('input-5');
const text6 = document.getElementById('input-6');
const text7 = document.getElementById('input-7');
const text8 = document.getElementById('input-8');
const text9 = document.getElementById('input-9');

const saveBtn1 = document.getElementById('saveInput-1');
const saveBtn2 = document.getElementById('saveInput-2');
const saveBtn3 = document.getElementById('saveInput-3');
const saveBtn4 = document.getElementById('saveInput-4');
const saveBtn5 = document.getElementById('saveInput-5');
const saveBtn6 = document.getElementById('saveInput-6');
const saveBtn7 = document.getElementById('saveInput-7');
const saveBtn8 = document.getElementById('saveInput-8');
const saveBtn9 = document.getElementById('saveInput-9');


const userInput = document.getElementsByName('textarea');

function getInput1() {
    userInput.innerHTML = text1.value;
    console.log(userInput);
}

function getInput2() {
    userInput.innerHTML = text2.value;
    console.log(userInput);
}

function getInput3() {
    userInput.innerHTML = text3.value;
    console.log(userInput);
}

function getInput4() {
    userInput.innerHTML = text4.value;
    console.log(userInput);
}

function getInput5() {
    userInput.innerHTML = text5.value;
    console.log(userInput);
}

function getInput6() {
    userInput.innerHTML = text6.value;
    console.log(userInput);
}

function getInput7() {
    userInput.innerHTML = text7.value;
    console.log(userInput);
}

function getInput8() {
    userInput.innerHTML = text8.value;
    console.log(userInput);
}

function getInput9() {
    userInput.innerHTML = text9.value;
    console.log(userInput);
}

saveBtn1.addEventListener('click', getInput1);
saveBtn2.addEventListener('click', getInput2);
saveBtn3.addEventListener('click', getInput3);
saveBtn4.addEventListener('click', getInput4);
saveBtn5.addEventListener('click', getInput5);
saveBtn6.addEventListener('click', getInput6);
saveBtn7.addEventListener('click', getInput7);
saveBtn8.addEventListener('click', getInput8);
saveBtn9.addEventListener('click', getInput9);

// When user inputs text and clicks the save button , the text is displayed in the console.