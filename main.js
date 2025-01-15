function add(num1, num2)
{
    return num1 + num2;
}
function subtract(num1, num2)
{
    return num1 - num2;
}
function multiply(num1, num2)
{
    return num1 * num2;
}
function divide(num1, num2)
{
    return num1 / num2;
}

function operate(choice)
{
    if (choice == 0)
    {
        add(num1, num2);
    }
    else if (choice == 1)
    {
        subtract(num1, num2);
    }
    else if (choice == 2)
    {
        multiply(num1, num2);
    }
    else if (choice == 3)
    {
        divide(num1, num2);
    }
}

//four container divs
const mainContainer = document.getElementById("mainContainer");
mainContainer.style.display = "flex";
mainContainer.style.backgroundColor = "lightGrey";
mainContainer.style.height = "70vh";
mainContainer.style.width = "32vw";
mainContainer.style.border = "5px solid black";
const everythingHolder = document.getElementById("everythingHolder");
everythingHolder.style.display = "flex";
everythingHolder.style.flexGrow = "1";
everythingHolder.style.backgroundColor = "purple";
everythingHolder.style.height = "100%";
everythingHolder.style.flexDirection = "column";

const calculatorResultContainer = document.getElementById("calculatorResult");
calculatorResultContainer.style.display = "flex";
calculatorResultContainer.style.backgroundColor = "blue";
calculatorResultContainer.style.height = "50px";
calculatorResultContainer.style.padding = "20px";
calculatorResultContainer.style.marginTop = "40px";
calculatorResultContainer.style.marginLeft = "10px";
calculatorResultContainer.style.marginRight = "10px";
calculatorResultContainer.style.marginBottom = "20px";
calculatorResultContainer.style.border = "4px solid black";
calculatorResultContainer.textContent = "RESULTS";
const operaterButtonsContainer = document.getElementById("operatorButtons");
operaterButtonsContainer.style.display = "flex";
operaterButtonsContainer.style.height = "50px";
const numberButtonContainer = document.getElementById("numberButtons");
numberButtonContainer.style.display = "flex";
numberButtonContainer.style.height = "50px";
numberButtonContainer.style.backgroundColor = "blue";
numberButtonContainer.style.padding = "30px";
numberButtonContainer.style.margin = "10px";
numberButtonContainer.style.flexWrap = "wrap";
for (let i = 0; i < 9; i++)
    {
        const numbersOneToNine = document.createElement("div");
        numbersOneToNine.textContent = i + 1;
        numbersOneToNine.style.width = "25%";
        numbersOneToNine.style.height = "25%";
        numbersOneToNine.style.padding = "16px";
        numbersOneToNine.style.display = "flex";
        numbersOneToNine.style.alignItems = "center";
        numbersOneToNine.style.justifyContent = "center";
        numberButtonContainer.appendChild(numbersOneToNine);
    }

const firstNum = document.createElement("p")
firstNum.style.textContent = "0";
const secondNum = document.createElement("p")
secondNum.style.textContent = "0";
calculatorResultContainer.appendChild(firstNum);
calculatorResultContainer.appendChild(secondNum);
let operator;

