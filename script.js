//basic variable declerations
let sum = 0;
let a = "";
let b = "";
let operationReq = "";
let error = "";
let resultShown = false;

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
        if (operationReq === "" && resultShown === true) {
            a = num.value;
            display.innerText = a;
            resultShown = false;
        } else if (a === "" && operationReq === "") {
            a = num.value;
            display.innerText = a;;
        } else if (a !== "" && operationReq === "" && resultShown === false) {
            a += num.value;
            display.innerText = a;
        } else if (operationReq !== "" && resultShown === false) {
            b += num.value;
            display.innerText = a + operationReq + b;
        }
    })
);

//Decimal Logic

decimalButton.addEventListener("click", () => {
    if (operationReq === "") {
        if (a === "") {
            a = "0."
            display.innerText = a;
        } else if (!a.includes(".")) {
            a += ".";
            display.innerText = a;
        }
    } else {    
        if (b === "") {
            b = "0."
            display.innerText = a + operationReq + b;
        } else if (!b.includes(".")) {
                b += ".";
                display.innerText = a + operationReq + b;    
        }
    }  
});

//Operator input logic

operationButtons.forEach((symbol) =>
    symbol.addEventListener("click", () => {
        if (operationReq == "" && a !== "") {
            operationReq = symbol.name;
            display.innerText += symbol.name;
            resultShown = false;
        } else if (operationReq !== "" && a !== "" && b !== "") {           
            operate(a, b, operationReq);

            if (error == "") {
                display.innerText = String(Math.round(sum * 100) / 100 + symbol.name);

                a = String(Math.round(sum * 100) / 100);
                b = "";
                sum = a;
                operationReq = symbol.name;
            } else {
                display.innerText = error;
            
                setTimeout(() => {
                    display.innerText = a;
                }, 2000)
            b = "";
            sum = "";
            operationReq = "";
            error = "";
            }
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
    resultShown = false;
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
        if (a === ".") {
            a = 0;
        } else if (b === ".") {
            b = 0;
        }

        operate(a, b, operationReq);
        resultShown = true;

        if (error == "") {
            display.innerText = String(Math.round(sum * 100) / 100);

            a = String(Math.round(sum * 100) / 100);
            b = "";
            sum = "";
            operationReq = "";
        } else {
            display.innerText = error;
            
            setTimeout(() => {
                display.innerText = a;
            }, 2000)
        b = "";
        sum = "";
        operationReq = "";
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
    } else if (b == 0) {
        return error = "Cannot Divide by 0!";
    }
}