//basic variable declerations
let sum = 0;
let a = 0;
let b = 0;
let operationReq = "";
let lastPressed = "";

//html linked variables
const display = document.querySelector("#textArea");
const numberButtons = document.querySelectorAll(".numbers");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const operationButtons = document.querySelectorAll(".operations");

//NumberPad logic

numberButtons.forEach((num) => 
    num.addEventListener("click", () => {
        console.log(parseInt(num.value, 10))

        if( a == 0 || a == null) {
            a = num.value;
        } else {
            a += num.value;
        }

        console.log(a);
    })
);

//Decimal Logic

decimalButton.addEventListener("click", () => {
    a += ".";
    console.log(a);
});

//Clear button logic

clearButton.addEventListener("click", () => {
    a = null;
    b = null;
    sum = null;
    operationReq = "";
    lastPressed = "";

    console.log(a);
});


function operate(a,b) {

    switch (operationReq) {
        case "+":
            add(a, b);
            break;
        
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

//Math Functions

function add(a, b) {
    return sum = a + b;
}

function subtract(a, b) {
    return sum = a - b;
}

function multiply(a, b) {
    return sum = a * b;
}

function divide(a, b) {
    return sum = a / b;
}