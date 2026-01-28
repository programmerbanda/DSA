// Create a JavaScript function to use Object.assign() for object cloning. (Concept: Object Methods)

const user = {
    firstname : "Shubham",
    lastname : "Tiwari",
}


const clonedUser = Object.assign({}, user);

console.log(clonedUser);