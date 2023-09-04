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

let var1 = 0, var2 = 0, operator = 0

function operate(var1, var2, operator){
    switch(operator){
        case add:
            add(var1, var2)
        case subtract:
            subtract(var1, var2)
    }
}
