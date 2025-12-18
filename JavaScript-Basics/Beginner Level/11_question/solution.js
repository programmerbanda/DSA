// Implement a JavaScript program to generate Fibonacci numbers up to n. (Concept: Loops)


function generateFibonacci(n) {    let fibSequence = [];
    let a = 0, b = 1;
    while (a <= n) {
        fibSequence.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return fibSequence;
}
console.log(generateFibonacci(15)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]