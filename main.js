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
mainContainer.style.width = "50vw"
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";
const calculatorContainer = document.getElementById("calculatorContainer");
calculatorContainer.style.display = "flex";
calculatorContainer.style.backgroundColor = "lightPurple";
const calculatorResultContainer = document.getElementById("calculatorResult");
const operaterButtonsContainer = document.getElementById("operatorButtons");
const numberButtonContainer = document.getElementById("numberButtons");

const firstNum = document.createElement("p")
firstNum.style.textContent = "0";
const secondNum = document.createElement("p")
secondNum.style.textContent = "0";
calculatorResultContainer.appendChild(firstNum);
calculatorResultContainer.appendChild(secondNum);
let operator;

