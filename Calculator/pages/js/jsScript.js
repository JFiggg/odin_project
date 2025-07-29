// contains display element
let display = document.querySelector(".label");
// contains number buttons
const nums = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
// maps each number button to a function typeNums function
nums.forEach((num) => {
    num.addEventListener("click", () => {
        typeNums(num.textContent);
    })
});
// maps each operation button to SaveOp function
operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener("click", () => {
        saveOp(operationBtn.textContent);
    })
});
// adds clear functionality to clear button
clearBtn.addEventListener("click", () => {
    clear();
});
// allows the equals button to calculate the inputs to produce a result 
equalsBtn.addEventListener("click", () => {
    calculate();
})

// stack holds first number and operation
var stack = [];

// type nums into display
function typeNums(input) {
    let current = display.textContent.replaceAll(",", "");
    if (current.length >= 8) {
        alert("Number too long");
        return;
    }
    // sets new num if display is 0, adds num to the end if number is not 0
    if (current == 0) {
        current = input;    
    } else {
        current += input;
    }
    display.textContent = Number(current).toLocaleString("en-US");
}

// function for clicking an operation
function saveOp(sign) {
    // does not perform function if it the top of the stack is an operaton
    if (stack.at(-1) == "+" || stack.at(-1) == "-" || stack.at(-1) == "x" || stack.at(-1) == "/") {
        return;
    }
    // display number and operation saved to stack
    stack.push(display.textContent);
    stack.push(sign);
    display.textContent = 0;
}

// Performs calculation using current number in display, the sign stored in the stack, and the other number stored in the stack 
function calculate() {
    // makes sure the stack has an operation clicked already, if not, this function will not execute
    if (!(stack.at(-1) == "+" || stack.at(-1) == "-" || stack.at(-1) == "x" || stack.at(-1) == "/")) {
        return;
    }
    var secondNum = Number(display.textContent.replaceAll(",", ""));
    var sign = stack.pop();
    var firstNum = Number(stack.pop().replaceAll(",", ""));
    // performs operation based on sign chosen
    let result;
    switch (sign) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "x":
            result = firstNum * secondNum;
            break;
        case "/":
            if (secondNum === 0) {
                alert("Can not divide by zero");
                return;
            }
            result = Math.floor(firstNum / secondNum);
            break;
        default:
            alert("Unknown operator");
            return;
    }
    if (String(result).length > 8) {
        alert("Error: Number too big!");
        return;
    }
    display.textContent = Number(result).toLocaleString("en-US");
    // stack is set to result as the first item
    stack = [display.textContent];
}

// clears calculator display and clears stack
function clear() {
    stack = [];
    display.textContent = 0;
}