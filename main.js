let num1 = null;
let num2 = null;
let operator = null;
let resetDisplay = false;

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
    if (num2 == 0)
    {
        return "ERROR: CAN'T DIVIDE BY 0";
    }
    return num1 / num2;
}

function operate(operatorSymbol, num1, num2)
{
    switch (operatorSymbol)
    {
    case "+" : return add(num1, num2);
    case "-" : return subtract(num1, num2);
    case "*" : return multiply(num1, num2);
    case "/" : return divide(num1, num2);
    default : return "Invalid Choice";
    }
}
//updates the display
function updateDisplay(value)
{
    if (resetDisplay)
    {
        calculatorResultContainer.textContent = "";
        resetDisplay = false;
    }
    calculatorResultContainer.textContent += value;
}

//handles number button clicks
function numberButtonClick(value)
{
    updateDisplay(value);
    if (operator == null)
    {
        num1 = parseFloat(calculatorResultContainer.textContent)
    }
    else 
    {
        num2 = parseFloat(calculatorResultContainer.textContent)
    }
}

function operatorButtonClick(operatorSymbol)
{
    if (num1 !== null && num2 !== null)
    {
        num1 = operate(operator, num1, num2);
        calculatorResultContainer.textContent = num1;
        num2 = null;
    }
    operator = operatorSymbol;
    resetDisplay = true;
}

function equalsButton() {
    if (num1 !== null && operator !== null && num2 !== null)
    {
        const result = operate(operator, num1, num2);
        calculatorResultContainer.textContent = result;
        num1 = result;
        num2 = null;
        operator = null;
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
everythingHolder.style.backgroundColor = "lightGrey";
everythingHolder.style.height = "100%";
everythingHolder.style.flexDirection = "column";

const calculatorResultContainer = document.getElementById("calculatorResult");
calculatorResultContainer.style.display = "flex";
calculatorResultContainer.style.backgroundColor = "blue";
calculatorResultContainer.style.padding = "20px";
calculatorResultContainer.style.marginTop = "40px";
calculatorResultContainer.style.marginLeft = "10px";
calculatorResultContainer.style.marginRight = "10px";
calculatorResultContainer.style.marginBottom = "20px";
calculatorResultContainer.style.border = "4px solid black";
calculatorResultContainer.style.justifyContent = "flex-end";
calculatorResultContainer.style.alignItems = "center";
calculatorResultContainer.style.fontSize = "28px";

const buttonHolder= document.getElementById("buttonHolder")
buttonHolder.style.display = "flex";
buttonHolder.style.flexDirection = "row";
buttonHolder.style.flexWrap = "nowrap";

const operaterButtonsContainer = document.getElementById("operatorButtons");
operaterButtonsContainer.style.display = "flex";
operaterButtonsContainer.style.margin = "10px";
operaterButtonsContainer.style.gap = "10px";
operaterButtonsContainer.style.padding = "10px";
operaterButtonsContainer.style.backgroundColor = "blue";
operaterButtonsContainer.style.border = "5px solid black";
operaterButtonsContainer.style.flexDirection = "column";

const operatorSymbolArr = ["/", "*", "-", "+", "="];
    operatorSymbolArr.forEach(operatorSymbol => {
        const operatorDiv = document.createElement("div")
        operatorDiv.textContent = operatorSymbol;
        operatorDiv.classList.add("button");
        operatorDiv.style.display = "flex";
        operatorDiv.style.height = "16px";
        operatorDiv.style.padding = "16px";
        operatorDiv.style.border = "1px solid black";
        operatorDiv.style.backgroundColor = "lightGrey";
        operatorDiv.style.cursor = "pointer";
        operaterButtonsContainer.appendChild(operatorDiv);
        
        //allows operators to be usable
        if (operatorSymbol === "=")
        {
            operatorDiv.addEventListener("click", equalsButton);
        }
        else
        {
            operatorDiv.addEventListener("click", () => operatorButtonClick)
        }
    });
   


const numberButtonContainer = document.getElementById("numberButtons");
numberButtonContainer.style.display = "flex";
numberButtonContainer.style.height = "auto";
numberButtonContainer.style.backgroundColor = "blue";
numberButtonContainer.style.padding = "30px";
numberButtonContainer.style.margin = "1px";
numberButtonContainer.style.flexWrap = "wrap";
numberButtonContainer.style.marginLeft = "5px";
numberButtonContainer.style.gap = "5px";
numberButtonContainer.style.border = "5px solid black";
for (let i = 1; i <= 9; i++)
    {
        const numbersOneToNine = document.createElement("div");
        numbersOneToNine.textContent = i;
        numbersOneToNine.style.width = "16px";
        numbersOneToNine.style.height = "16px";
        numbersOneToNine.style.padding = "16px";
        numbersOneToNine.style.display = "flex";
        numbersOneToNine.classList.add("button");
        numbersOneToNine.style.backgroundColor = "lightGrey";
        numbersOneToNine.style.border = "1px solid black";
        numbersOneToNine.style.alignItems = "center";
        numbersOneToNine.style.justifyContent = "center";
        numbersOneToNine.style.cursor = "pointer";
        numberButtonContainer.appendChild(numbersOneToNine);
        numbersOneToNine.addEventListener("click", () => numberButtonClick(i));
    }
    const zeroButton = document.createElement("div");
    zeroButton.style.border = "1px solid black";
    zeroButton.classList.add("button");
    zeroButton.textContent = "0";
    zeroButton.style.fontSize = "16px";
    zeroButton.style.display = "flex";
    zeroButton.style.height = "16px";
    zeroButton.style.width = "60px";
    zeroButton.style.padding = "16px";
    zeroButton.style.justifyContent = "center";
    zeroButton.style.alignItems = "center";
    zeroButton.style.backgroundColor = "lightGrey";
    numberButtonContainer.appendChild(zeroButton);
    zeroButton.addEventListener("click", () => numberButtonClick(zeroButton.textContent));

    const decimalButton = document.createElement("div");
    decimalButton.style.display = "flex";
    decimalButton.classList.add("button");
    decimalButton.textContent = ".";
    decimalButton.style.border = "1px solid black";
    decimalButton.style.height = "16px"
    decimalButton.style.width = "16px";
    decimalButton.style.padding = "16px";
    decimalButton.style.justifyContent = "center";
    decimalButton.style.alignItems = "center";
    decimalButton.style.backgroundColor = "lightGrey";
    numberButtonContainer.appendChild(decimalButton);
    decimalButton.addEventListener("click", () => numberButtonClick(decimalButton.textContent));
