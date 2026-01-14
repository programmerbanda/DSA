// Implement a JavaScript program to find the LCM of two numbers. (Concept: Math)


const gcd = (a, b) => {
    if(b === 0) {
        return a;
    }
    return gcd(b, a %b)
}

const lcm = (a, b) => {
    return Math.abs(a * b) / gcd(a, b);
}

console.log(lcm(3,7))