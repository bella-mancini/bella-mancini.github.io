/* RANDOM NUMBER ENTER*/
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
let output1Int = parseInt(output1.textContent);
let output2Int = parseInt(output2.textContent);
let output3Int = parseInt(output3.textContent);

let outputInt = output1Int+output2Int+output3Int;
console.log(output1Int);
console.log(output2Int);
console.log(output3Int);

const minusButton = document.querySelector('.random1-button').addEventListener('click', random1);
const plusButton = document.querySelector('.random2-button').addEventListener('click', random2);
const randomButton = document.querySelector('.random3-button').addEventListener('click', random3);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

const submitRAND1Button = document.querySelector('.submitRAND1-button').addEventListener('click', submitRAND1);
const submitRAND2Button = document.querySelector('.submitRAND2-button').addEventListener('click', submitRAND2);
const submitRAND3Button = document.querySelector('.submitRAND3-button').addEventListener('click', submitRAND3);
const submitRAND4Button = document.querySelector('.submitRAND4-button').addEventListener('click', submitRAND4);
const submitRAND5Button = document.querySelector('.submitRAND5-button').addEventListener('click', submitRAND5);
const submitRAND6Button = document.querySelector('.submitRAND6-button').addEventListener('click', submitRAND6);





function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function random1() {
    outputInt = randomNumber(0, 999);
    output1.textContent = outputInt;
}
function random2() {
    outputInt = randomNumber(0, 999);
    output2.textContent = outputInt;
}

function random3() {
    outputInt = randomNumber(0, 9999);
    output3.textContent = outputInt;
}

function submit() {
    alert(output1.textContent+'-'+output2.textContent+'-'+output3.textContent);
  
}



/*RANDOM BUTTONS*/
function submitRAND1(){
    window.location='https://thatsthefinger.com/';
}

function submitRAND2(){
    window.location='https://thatsthefinger.com/';
}

function submitRAND3(){
    window.location='https://thatsthefinger.com/';
}

function submitRAND4(){
    window.location='https://thatsthefinger.com/';
}

function submitRAND5(){
    window.location='https://thatsthefinger.com/';
}

function submitRAND6(){
    window.location='https://thatsthefinger.com/';
}
