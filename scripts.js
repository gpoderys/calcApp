let var1 = 0
let var2 = 0
let result = 0
let operator = 'a'
let displayValue = '0'

function add(var1, var2){
    return +var1 + +var2
}
function subtract(var1, var2){
    return var1 - var2

}function multiply(var1, var2){
    return var1 * var2

}function divide(var1, var2){
    if (var2 == 0) {return 'error'}
    return var1 / var2
}

function operate(var1, var2, operator2){
    console.log(var1,operator2,var2)
    switch(operator2){
        case '+':
            return add(var1, var2)
        case '-':
            return subtract(var1, var2)
        case '*':
            return multiply(var1, var2)
        case '/':
            return divide(var1, var2)
    }
}

// Number button functionality with 15 character display limit
const numberButtons = document.querySelectorAll('.number-buttons .calc-button');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (result === 'done') {
            displayValue = '0'
            result = 0
        }
            if (displayValue.length < 15){
                if (displayValue === '0'){ 
                    displayValue = ''
                }
                displayValue += button.textContent
            } 
    });
});

// Operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue !== `Can't divide by zero`){
            operator = button.textContent
            var1 = displayValue
            displayValue = '0'
        }
    })
})

// Equals button
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (result !== 'done') {
        var2 = displayValue
        result = operate(var1, var2, operator)
        console.log(result)
        if (result === 'error') {
            displayValue = `Can't divide by zero`
        } else {
            displayValue = parseFloat(result).toFixed(1)
        }
        var1 = 0
        var2 = 0
        operator = ''
        result = 'done'
    }
})

// Clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    var1 = 0, var2 = 0, operator = ''
    result = 0, displayValue = '0'
})

// Delete button
const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
    if (typeof displayValue === 'string') {
        displayValue = displayValue.slice(0,-1)
    }
})

//   !!! THIS BUTTON SCRIPT NEEDS TO BE LAST !!!
// Display is updated after every single button click
// no need to repeat display value updates elsewhere
const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.calc-button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue === '') {
            displayValue = '0'
        }
        display.textContent = displayValue
    })
})