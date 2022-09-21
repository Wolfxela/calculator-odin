//create 3 let variables to show the first number, the number that will be added to the first one, and the result
let firstNumber = "";
let secondNumber = 0;
let resultNumber = 0;
//create a variable for the operator that's being used
let operator = "";
//create a variable to store every single button
const button0 = document.querySelector(".btn0");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const button5 = document.querySelector(".btn5");
const button6 = document.querySelector(".btn6");
const button7 = document.querySelector(".btn7");
const button8 = document.querySelector(".btn8");
const button9 = document.querySelector(".btn9");
const buttonClear = document.querySelector(".clear");
const buttonEqual = document.querySelector(".equal");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const buttonDivide = document.querySelector(".divide");
const buttonMultiply = document.querySelector(".multiply");
//create a variable for the screen first and second number
const screenNumberOne = document.querySelector(".firstNumber");
const screenNumberTwo = document.querySelector(".secondNumber");

//create a function for each button
//number buttons should set the first number or the number that will be added depending on the situation and display them on the screen
button0.addEventListener('click', function(){createFirstNumber("0");})
button1.addEventListener('click', function(){createFirstNumber("1");})
button2.addEventListener('click', function(){createFirstNumber("2");})
button3.addEventListener('click', function(){createFirstNumber("3");})
button4.addEventListener('click', function(){createFirstNumber("4");})
button5.addEventListener('click', function(){createFirstNumber("5");})
button6.addEventListener('click', function(){createFirstNumber("6");})
button7.addEventListener('click', function(){createFirstNumber("7");})
button8.addEventListener('click', function(){createFirstNumber("8");})
button9.addEventListener('click', function(){createFirstNumber("9");})
//the operator buttons will choose what operator will be chosen to the next number and display it and make the first number into the second number with the correct operator next to it
buttonPlus.addEventListener('click', function(){ addOperator("+");})
buttonMinus.addEventListener('click', function(){})
buttonDivide.addEventListener('click', function(){})
buttonMultiply.addEventListener('click', function(){})

//the equal button will show the 2 numbers at the top with their operator, with the result in the bottom
//the clear button will on click clear everything and return a 0 on the screen, and when held will clear the entire calculator



//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
//this function will (insert operator here) the 2 numbers together and give a result

function createFirstNumber(number)
{
    firstNumber = firstNumber + number;
    screenNumberTwo.textContent = firstNumber;
    
}
function addOperator(operator)
{
    secondNumber = firstNumber + " " + operator;
    screenNumberOne.textContent = secondNumber;
    screenNumberTwo.textContent = "0";
    firstNumber = "";
}