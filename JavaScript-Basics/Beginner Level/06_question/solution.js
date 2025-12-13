// Create a JavaScript function to check if a number is prime. (Concept: Math)


const checkPrime = (num) => {
    if(!num) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    } 
    return num > 1;
}

console.log(checkPrime(29)); // true
console.log(checkPrime(4));  // false