//basic variable declerations
let sum = 0;
let a = "";
let b = "";
let operationReq = "";
let error = "";

//html linked variables
const display = document.querySelector("#textArea");
const numberButtons = document.querySelectorAll(".numbers");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const operationButtons = document.querySelectorAll(".operations");
const undoButton = document.querySelector(".undo");
const equalButton = document.querySelector(".equal");

//NumberPad logic

numberButtons.forEach((num) => 
    num.addEventListener("click", () => {
        if (operationReq == "") {
            a += num.value;
            display.innerText = a;
        } else {
            b += num.value;
            display.innerText = a + operationReq + b;
        }
    })
);

//Decimal Logic

decimalButton.addEventListener("click", () => {
    if (operationReq === "") {
        if (!a.includes(".")) {
            if (a === "") {
                a += ".";
                display.innerText = a;
            }
        } else {
            if (!b.includes(".")) {
                if (b === "") {
                    b += ".";
                    display.innerText = a + operationReq + b;   
                }
            }
        }
    }  
});

//Operator input logic

operationButtons.forEach((symbol) =>
    symbol.addEventListener("click", () => {
        if (operationReq == "" && a !== 0) {
            operationReq = symbol.name;
            display.innerText += symbol.name;
        } else if (b == 0){
            operationReq = symbol.name;
            display.innerText = a + operationReq;
        }
    })
);

//Clear button logic

clearButton.addEventListener("click", () => {
    a = "";
    b = "";
    sum = "";
    operationReq = "";
    error = "";
    display.innerText = "";
});

// Undo Button logic

undoButton.addEventListener("click", () => {
    if (b.toString().length > 0) {
        b = b.slice(0, -1);
        display.innerText = a + operationReq + b;   
    } else if (operationReq !== "") {
        operationReq ="";
        display.innerText = a;
    } else {
        a = a.toString().slice(0, -1);
        display.innerText = a;
    }
})

//Equal button and operation function call

equalButton.addEventListener("click", () => {
    if (a !== "" && b !== "" && operationReq !== "") {
        operate(a, b, operationReq);

        if (error == "") {
            display.innerText = Math.round(sum * 100) / 100;

            a = Math.round(sum * 100) / 100;
            b = "";
            sum = "";
            operationReq = "";
        
        } else {
            display.innerText = error;
            
            setTimeout(() => {
                display.innerText = a;
                b = "";
                operationReq = "";
            }, 2000)
        error = "";
        }
    };    
});

function operate(a,b, operationReq) {

    a = parseFloat(a);
    b = parseFloat(b);

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
    return sum = +a + +b;
}

function subtract(a, b) {
    return sum = +a - +b;
}

function multiply(a, b) {
    return sum = +a * +b;
}

function divide(a, b) {
    if (a != 0 && b != 0) {
        return sum = +a / +b;
    } else {
        return error = "Cannot Divide by 0!";
    }
}