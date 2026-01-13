// Write a JavaScript function to swap two variables without a temporary variable. (Concept:
// Variables)

const swapVariabales = function(a, b){
    if(!a || !b) return `Please Enter a valid variables!`
    [a, b] = [b, a]
    return `After Swapping: a = ${b}, b = ${a}`
}

console.log(swapVariabales('Shubham', "tiwari"))

