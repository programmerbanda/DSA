// Implement a JavaScript program to calculate factorial using a for loop. (Concept: Loops)


let number = 5; // You can change this value to test with other numbers
let factorial = 1;

while(number > 0){
    factorial *= number;
    number -= 1
}

console.log(factorial)



const factorialFunction = function(num){
    if(!num || typeof num !== "number") return `Please Enter a Number!`;
    let fact = 1;
    for(let i = num; i > 0; i--){
        fact *= num;
        num -= 1
    } 
    return fact;
}

console.log(factorialFunction(5));