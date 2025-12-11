// Write a JavaScript function to find the GCD of two numbers using Euclidean algorithm.
// (Concept: Math)

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};
console.log(gcd(48, 24)); // Output: 24