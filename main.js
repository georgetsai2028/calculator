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
const firstNum = document.createElement("p")
const secondNum = document.createElement("p")
let operator;

