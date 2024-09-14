function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

let operand1 = "";
let operand2 = "";
let operator = "";

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "x":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
    case "%":
      return modulus(operand1, operand2);
    default:
      return "Error";
  }
}
const display = document.querySelector(".display");
let displayValue = "";
const p = document.createElement("p");
const h2 = document.createElement("h2");

function displayHandler(e) {
  if (e.target.tagName === "BUTTON") {
    const value = e.target.textContent;

    display.appendChild(p);
    if ("+-/x%".includes(value) && operator.length === 0 && operand1.length !== 0) {
      operator = value;
      displayValue += value;
    } else if (!"+-/x%".includes(value) && operator.length === 0) {
      operand1 += value;
      displayValue += value;
    } else if (!"+-/x%".includes(value) && operator.length === 1) {
      operand2 += value;
      displayValue += value;
    }
    p.textContent = displayValue;

    console.log("op1", operand1);
    console.log("op2", operand2);
    console.log("o", operator);
  }
}

const numbers = document.querySelector(".numbers");
const ope = document.querySelector(".operators");
const calc = document.querySelector("#equals");
const clear = document.querySelector("#clear");

numbers.addEventListener("click", displayHandler);

ope.addEventListener("click", displayHandler);

calc.addEventListener("click", () => {
  const result = operate(operator, Number(operand1), Number(operand2));
  displayValue = "";
  operand1 = result;
  operand2 = 0;
  operator = "";
  h2.textContent = result;
  display.appendChild(h2);
});

clear.addEventListener("click", () => {
  displayValue = "";
  operand1 = 0;
  operand2 = 0;
  operator = "";
  h2.textContent = "";
  p.textContent = "";
});
