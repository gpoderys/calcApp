let var1 = 0, var2 = 0, operator = 0
let displayValue = '0'

function add(var1, var2){
    return +var1 + +var2
}
function subtract(var1, var2){
    return var1 - var2

}function multiply(var1, var2){
    return var1 * var2

}function divide(var1, var2){
    if (var2 === 0) return 'error'
    return var1 / var2
}

function operate(var1, var2, operator){
    switch(operator){
        case add:
            add(var1, var2)
        case subtract:
            subtract(var1, var2)
    }
}

// Number button functionality with 15 character display limit
const numberButtons = document.querySelectorAll('.number-buttons .calc-button');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue.length < 15){
            if (displayValue === '0'){
                displayValue = ''
            }
            displayValue += button.textContent
        } 
    });
});

// Clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    var1 = 0, var2 = 0, operator = 0
    displayValue = '0'
})

// Delete button
const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0,-1)
})


//   !!! THIS BUTTON SCRIPT NEEDS TO BE LAST !!!
// Display is updated after every single button click
// no need to repeat display value updates elsewhere
const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.calc-button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue === '') {displayValue = '0'}
        display.textContent = displayValue
    })
})