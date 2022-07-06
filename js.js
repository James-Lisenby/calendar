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



function getInput1() {
    var userInput1 = text1.value;
    localStorage.setItem("userInput1", JSON.stringify(userInput1));
    console.log(userInput1);
};

function getInput2() {
    var userInput2 = text2.value;
    localStorage.setItem("userInput2", JSON.stringify(userInput2));
    console.log(userInput2);
}

function getInput3() {
    var userInput3 = text3.value;
    localStorage.setItem("userInput3", JSON.stringify(userInput3));
    console.log(userInput3);
}

function getInput4() {
    var userInput4 = text4.value;
    localStorage.setItem("userInput4", JSON.stringify(userInput4));
    console.log(userInput4);
}

function getInput5() {
    userInput5.innerHTML = text5.value;
    localStorage.setItem("userInput5", JSON.stringify(userInput5));
    console.log(userInput5);
}

function getInput6() {
    userInput6.innerHTML = text6.value;
    localStorage.setItem("userInput6", JSON.stringify(userInput6));
    console.log(userInput6);
}

function getInput7() {
    userInput7.innerHTML = text7.value;
    localStorage.setItem("userInput7", JSON.stringify(userInput7));
    console.log(userInput7);
}

function getInput8() {
    userInput8.innerHTML = text8.value;
    localStorage.setItem("userInput8", JSON.stringify(userInput8));
    console.log(userInput8);
}

function getInput9() {
    userInput9.innerHTML = text9.value;
    localStorage.setItem("userInput9", JSON.stringify(userInput9));
    console.log(userInput9);
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
