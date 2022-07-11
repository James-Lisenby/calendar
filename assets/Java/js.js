var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

document.getElementById("currentDay").innerHTML = today;
// Displays the date and time in the jumbotron.


var currentTime = moment().format("HH");


var blockOfTime = document.querySelectorAll("[data-hour]");
console.log(blockOfTime);



// Needs to apply to the text area "children" of the time block.

function hourColor() {
    for (let index = 0; index < blockOfTime.length; index++) {
        var hour = blockOfTime[index].dataset.hour;
        if (currentTime > hour) {
            blockOfTime[index].firstElementChild.classList.add("past")
        } else if (currentTime == hour) {
            blockOfTime[index].firstElementChild.classList.add("present")
        } else if (currentTime < hour) {
            blockOfTime[index].firstElementChild.classList.add("future")
        }

    };

}

hourColor();

var text1 = document.getElementById('input-1');
var text2 = document.getElementById('input-2');
var text3 = document.getElementById('input-3');
var text4 = document.getElementById('input-4');
var text5 = document.getElementById('input-5');
var text6 = document.getElementById('input-6');
var text7 = document.getElementById('input-7');
var text8 = document.getElementById('input-8');
var text9 = document.getElementById('input-9');
// Retrieves user input from text box.

var saveBtn1 = document.getElementById('saveInput-1');
var saveBtn2 = document.getElementById('saveInput-2');
var saveBtn3 = document.getElementById('saveInput-3');
var saveBtn4 = document.getElementById('saveInput-4');
var saveBtn5 = document.getElementById('saveInput-5');
var saveBtn6 = document.getElementById('saveInput-6');
var saveBtn7 = document.getElementById('saveInput-7');
var saveBtn8 = document.getElementById('saveInput-8');
var saveBtn9 = document.getElementById('saveInput-9');
// The save buttons.


// First function saves user text into local storage. The second function recalls the information and displays back into tlhe text box.

function getInput1() {
    var userInput1 = text1.value;
    localStorage.setItem("userInput1", JSON.stringify(userInput1));
};

function displayInput1() {
    var textInput1 = JSON.parse(localStorage.getItem("userInput1"));
    document.getElementById("input-1").innerHTML = textInput1;

};


function getInput2() {
    var userInput2 = text2.value;
    localStorage.setItem("userInput2", JSON.stringify(userInput2));
};

function displayInput2() {
    var textInput2 = JSON.parse(localStorage.getItem("userInput2"));
    document.getElementById("input-2").innerHTML = textInput2;

};

function getInput3() {
    var userInput3 = text3.value;
    localStorage.setItem("userInput3", JSON.stringify(userInput3));
};

function displayInput3() {
    var textInput3 = JSON.parse(localStorage.getItem("userInput3"));
    document.getElementById("input-3").innerHTML = textInput3;

};

function getInput4() {
    var userInput4 = text4.value;
    localStorage.setItem("userInput4", JSON.stringify(userInput4));
};

function displayInput4() {
    var textInput4 = JSON.parse(localStorage.getItem("userInput4"));
    document.getElementById("input-4").innerHTML = textInput4;

};

function getInput5() {
    var userInput5 = text5.value;
    localStorage.setItem("userInput5", JSON.stringify(userInput5));
};

function displayInput5() {
    var textInput5 = JSON.parse(localStorage.getItem("userInput5"));
    document.getElementById("input-5").innerHTML = textInput5;

};

function getInput6() {
    var userInput6 = text6.value;
    localStorage.setItem("userInput6", JSON.stringify(userInput6));
};

function displayInput6() {
    var textInput6 = JSON.parse(localStorage.getItem("userInput6"));
    document.getElementById("input-6").innerHTML = textInput6;

};

function getInput7() {
    var userInput7 = text7.value;
    localStorage.setItem("userInput7", JSON.stringify(userInput7));
};

function displayInput7() {
    var textInput7 = JSON.parse(localStorage.getItem("userInput7"));
    document.getElementById("input-7").innerHTML = textInput7;

};

function getInput8() {
    var userInput8 = text8.value;
    localStorage.setItem("userInput8", JSON.stringify(userInput8));
};

function displayInput8() {
    var textInput8 = JSON.parse(localStorage.getItem("userInput8"));
    document.getElementById("input-8").innerHTML = textInput8;

};

function getInput9() {
    var userInput9 = text9.value;
    localStorage.setItem("userInput9", JSON.stringify(userInput9));
};

function displayInput9() {
    var textInput9 = JSON.parse(localStorage.getItem("userInput9"));
    document.getElementById("input-9").innerHTML = textInput9;
}

displayInput1();
displayInput2();
displayInput3();
displayInput4();
displayInput5();
displayInput6();
displayInput7();
displayInput8();
displayInput9();


saveBtn1.addEventListener('click', getInput1);
saveBtn2.addEventListener('click', getInput2);
saveBtn3.addEventListener('click', getInput3);
saveBtn4.addEventListener('click', getInput4);
saveBtn5.addEventListener('click', getInput5);
saveBtn6.addEventListener('click', getInput6);
saveBtn7.addEventListener('click', getInput7);
saveBtn8.addEventListener('click', getInput8);
saveBtn9.addEventListener('click', getInput9);
// When user inputs text and clicks the save button, information is stored into 'local storag'
