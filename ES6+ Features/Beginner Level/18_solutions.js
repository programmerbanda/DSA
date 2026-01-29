// Create a JavaScript function to use rest parameters in a recursive function. (Concept: Rest
// Parameters)

function factorial(...args) {
    const n = args[0];
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120