// Create a JavaScript function to use template literals for string formatting. (Concept: Template Literals)


const greeting = (username) => {
    if(!username) return `Please Enter a Username!`;
    return `Hello, ${username}! Welcome to the JavaScript World.`;
}

console.log(greeting("Shubham"));