let var1 = 0
let var2 = 0
let result = 0
let operator = ''
let displayValue = '0'
let varReady = false
let dotAllowed = true

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
    console.log('Operation ',var1,operator2,var2)
    switch(operator2){
        case '+':
            return add(var1, var2)
        case '-':
            return subtract(var1, var2)
        case '*':
            return multiply(var1, var2)
        case '/':
            return divide(var1, var2)
        case '':
            return 0
    }
}

// Number button functionality with 15 character display limit
const numberButtons = document.querySelectorAll('.number-buttons .calc-button');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (result === 'done' || displayValue === '0') {
            displayValue = ''
            result = 0
        }
            if (displayValue.length < 11 && varReady === false){
                displayValue += button.textContent
            } else if (varReady === true){
                displayValue = ''
                displayValue += button.textContent
                varReady = false
            }
    });
});

// Operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue !== `Can't divide by zero`){
            if (result === 'operating') {
                var2 = displayValue
                result = operate(var1, var2, operator)
                console.log('Result = ',result)
                displayValue = parseFloat(result).toFixed(0)
                result = '0'
            }
            operator = button.textContent
            var1 = displayValue
            varReady = true
            dotAllowed = true
            result = 'operating'
        }
    })
})

// Equals button
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (result !== 'done') {
        var2 = displayValue
        result = operate(var1, var2, operator)
        console.log('Result = ',result)
        if (result === 'error') {
            displayValue = `Can't divide by zero`
        } else {
            displayValue = parseFloat(result.toFixed(10))
        }
        var1 = 0, var2 = 0, operator = ''
        dotAllowed = true
        result = 'done'
    }
})

// Clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    var1 = 0, var2 = 0, operator = ''
    result = 0, displayValue = '0'
    varReady = false, dotAllowed = true
})

// Delete button
const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
    if (typeof displayValue === 'string') {
        displayValue = displayValue.slice(0,-1)
    }
})

// Dot button
const dotButton = document.querySelector('#dot');
dotButton.addEventListener('click', () => {
    if (dotAllowed === false){
        displayValue = displayValue.slice(0,-1)
    }
    if (displayValue === '.') {
        displayValue = '0.'
    }
    dotAllowed = false
})

//   !!! THIS BUTTON SCRIPT NEEDS TO BE LAST !!!
// Display is updated after every single button click
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