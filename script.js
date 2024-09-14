let operand1 = "";
let operand2 = "";
let operator = "";
let expression = "";
let result = "";

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

function operate(o, n1, n2) {
  switch (o) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "x":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
    case "%":
      return modulus(n1, n2);
    default:
      return "Error";
  }
}

function clearHandler(exp, rt) {
  operand1 = "";
  operand2 = "";
  operator = "";
  expression = "";
  result = "";
  exp.textContent = "";
  rt.textContent = "";
}

function backHandler(exp) {
  if (expression.length > 0) {
    expression = expression.slice(0, expression.length - 1);
    if (operand2.length > 0) {
      operand2 = operand2.slice(0, operand2.length - 1);
    } else if (operator.length > 0) {
      operator = "";
    } else {
      operand1 = operand1.slice(0, operand1.length - 1);
    }
  }

  exp.textContent = expression;
}

function modulusHandler() {}

function expressionHandler(e, exp) {
  const operation = "+-x/%";
  const period = ".";
  if (e.target.tagName === "BUTTON") {
    const value = e.target.textContent;

    if (operation.includes(value) && expression.length === 0) {
      return;
    } else if (!operation.includes(value) && operator.length === 0) {
      if (value === period && operand1.includes(period)) {
        return;
      }

      if (value === "- n") {
        if (operand1.length > 0) {
          return;
        } else {
          operand1 += "-";
          expression += "-";
          exp.textContent = expression;
          return;
        }
      }
      if (operand1.length > 10) {
        return;
      }

      operand1 += value;
      expression += value;
    } else if (!operation.includes(value) && operator.length === 1) {
      if (value === period && operand2.includes(period)) {
        return;
      }

      if (value === "- n") {
        if (operand2.length > 0) {
          return;
        } else {
          operand2 += "-";
          expression += "-";
          exp.textContent = expression;
          return;
        }
      }

      if (operand2.length > 10) {
        return;
      }

      operand2 += value;
      expression += value;
    } else if (operation.includes(value) && operator.length === 0) {
      if (period.includes(operand1.at(operand1.length - 1))) {
        return;
      }
      operator += value;
      expression += value;
    }

    exp.textContent = expression;
  }
}

function equalsHandler(rt) {
  const period = ".";
  if (operator.length !== 0 && operand1.length !== 0 && operand2.length !== 0) {
    if (period.includes(operand2.at(operand2.length - 1))) {
      return;
    }
    result = operate(operator, Number(operand1), Number(operand2));

    if (result === Infinity) result = "can't divide by 0";

    if (countDecimalPoints(result) > 6) result = Number(result).toFixed(6);
    rt.textContent = result;
    operand1 = "";
    operand2 = "";
    operator = "";
    expression = "";
    result = "";
  }
}

function countDecimalPoints(n) {
  const string = n.toString();
  const parts = string.split(".");
  if (parts.length === 2) {
    return parts[1].length;
  } else {
    return 0;
  }
}

const displayElement = document.querySelector(".display");
const expressionElement = document.querySelector("#expression");
const resultElement = document.querySelector("#result");
const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");
const modulusBtn = document.querySelector("#modulus");
const numbersBtnGroup = document.querySelector(".numbers");
const operatorsBtnGroup = document.querySelector(".operators");
const equalsBtn = document.querySelector("#equals");

clearBtn.addEventListener("click", () =>
  clearHandler(expressionElement, resultElement)
);
backBtn.addEventListener("click", () => backHandler(expressionElement));
modulusBtn.addEventListener("click", (event) =>
  expressionHandler(event, expressionElement)
);
numbersBtnGroup.addEventListener("click", (event) =>
  expressionHandler(event, expressionElement)
);
operatorsBtnGroup.addEventListener("click", (event) =>
  expressionHandler(event, expressionElement)
);
equalsBtn.addEventListener("click", () => equalsHandler(resultElement));
