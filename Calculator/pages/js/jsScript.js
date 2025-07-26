// contains display element
let display = document.querySelector(".label");
// contains number buttons
const nums = document.querySelectorAll(".number");
// maps each button to a function that displays the number in the display
nums.forEach((num) => {
    num.addEventListener("click", () => {
        updateDisplay(num.textContent);
    })
});


function calcLogic() {
    // record first num
    // record sign
    // record second num
    // on equal, show result, set num to first num or change on click
}

function updateDisplay(input) {
    if (display.textContent.length > 8) {
        alert("Number too long");
        return;
    }
    if (display.textContent == 0) {
        display.textContent = input;    
    } else {
        display.textContent = display.textContent + input;
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}