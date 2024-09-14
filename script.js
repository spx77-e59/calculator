function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

let operand1;
let operand2;
let operator;

function operate(operator, operand1, operand2) {
    switch(operator){
        case "+":
            return add(operand1,operand2);
        case "-":
            return subtract(operand1,operand2);
        case "*": 
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1,operand2);
        default:
            return("Error");
    }
}

