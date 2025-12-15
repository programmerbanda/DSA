// Implement a JavaScript program to use default parameters in a function. (Concept: Default
// Parameters)

const greeting = (user = "Shubham") => {
    return `Hello ${user} welcome to Hello World!`;
}

console.log(greeting("Shubh"))