//create 3 let variables to show the first number, the number that will be added to the first one, and the result
let firstNumber = "0";
let secondNumber = 0;
let resultNumber = 0;
//create a variable for the operator that's being used
let operatorCalc = 0;
//create a variable to store every single button
const numberButtons = document.querySelectorAll(".btnNum");
const buttonClear = document.querySelector(".clear");
const buttonEqual = document.querySelector(".equal");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const buttonDivide = document.querySelector(".divide");
const buttonMultiply = document.querySelector(".multiply");
//create a variable for the screen first and second number
const screenNumberOne = document.querySelector(".firstNumber");
const screenNumberTwo = document.querySelector(".secondNumber");
let tempHolder = "";
let hasTopNumber = false;
let hasResult = false;
let hasOperator = false;


//create a function for each button
//number buttons should set the first number or the number that will be added depending on the situation and display them on the screen
for(let i = 0; i < numberButtons.length;i++)
{
    if(i < 9)
    {
        numberButtons[i].addEventListener('click', function(){createFirstNumber(i + 1);});
       
    }

    if(i == numberButtons.length - 1)
    {
        
        numberButtons[i].addEventListener('click', function(){createFirstNumber(0);});
    }
   
}
//the operator buttons will choose what operator will be chosen to the next number and display it and make the first number into the second number with the correct operator next to it
buttonPlus.addEventListener('click', function(){ calcOperator(1); addOperatorSymbol("+");});
buttonMinus.addEventListener('click', function(){ calcOperator(2); addOperatorSymbol("-");});
buttonDivide.addEventListener('click', function(){ calcOperator(3); addOperatorSymbol("/");});
buttonMultiply.addEventListener('click', function(){ calcOperator(4); addOperatorSymbol("*");});

//the equal button will show the 2 numbers at the top with their operator, with the result in the bottom

//the clear button will on click clear everything and return a 0 on the screen, and when held will clear the entire calculator
buttonClear.addEventListener('click',function(){ firstNumber = "0"; secondNumber = 0; resultNumber = 0; screenNumberOne.textContent = ''; screenNumberTwo.textContent = '0'; hasTopNumber = false;});
buttonEqual.addEventListener('click',function(){ if(resultNumber == 0){resultNumber = parseInt(screenNumberTwo.textContent);} calcOperator(operatorCalc); screenNumberTwo.textContent = resultNumber; screenNumberOne.textContent = ''; hasTopNumber = false; hasResult = true; firstNumber = "0"; secondNumber = 0; });



//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
//this function will (insert operator here) the 2 numbers together and give a result
function operatingFunc(operator,number1 = 1,number2 = 1)
{
   
    if(operator == 1)
    {
        resultNumber = number1 + number2;
        hasTopNumber = false;
        screenNumberOne.textContent = resultNumber
    }
    else if(operator == 2)
    {
        resultNumber = number2 - number1;
        hasTopNumber = false;
        screenNumberOne.textContent = resultNumber
    }
    else if(operator == 3)
    {
       
            resultNumber = number2 / number1;
            hasTopNumber = false;
            screenNumberOne.textContent = resultNumber
        
      
    }
    else if(operator == 4)
    {
       
            resultNumber = number1 * number2;
            hasTopNumber = false;
            screenNumberOne.textContent = resultNumber
        
        
    }
    

}

function createFirstNumber(number)
{
    if(hasResult == true)
    {
        resultNumber = 0;
        hasResult = false;
    }
    firstNumber = firstNumber + number;
    screenNumberTwo.textContent = parseInt(firstNumber);
    
}
function calcOperator(operatorNumber)
{

    if(hasResult == true)
    {
        secondNumber = resultNumber;
        
    }
    if(hasTopNumber == true && firstNumber != 0)
    {
       
        operatingFunc(operatorCalc,parseInt(firstNumber),secondNumber);
        screenNumberTwo.textContent = "0";
        firstNumber = "0";

    }
    operatorCalc = operatorNumber;
    if(resultNumber == 0 && firstNumber != 0)
    {
 
        screenNumberOne.textContent = parseInt(firstNumber);
        secondNumber = parseInt(firstNumber);
    }
    else if( resultNumber > 0 || resultNumber < 0)
    {
        screenNumberOne.textContent = resultNumber;
        secondNumber = resultNumber;
    }
    screenNumberTwo.textContent = "0";
    hasTopNumber = true;
    firstNumber = "0";
   

  

}
function addOperatorSymbol(operatorSymbol)
{

    
    if(hasOperator == true)
    {
        screenNumberOne.textContent = tempHolder + ' ' + operatorSymbol;
       
    }
    if(hasOperator == false)
    {
        tempHolder = screenNumberOne.textContent;
        screenNumberOne.textContent = screenNumberOne.textContent + ' ' + operatorSymbol;
        hasOperator = true;
    }
    
    
}

