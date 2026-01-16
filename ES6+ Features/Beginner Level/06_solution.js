// Create a JavaScript function to use rest parameters to handle variable arguments. (Concept:
// Rest Parameters)


const restParameter = (...username) => {
    if(!username) return `Please Enter username!?`;
    return username;
}

console.log(restParameter("Shubham", "Turbo", "Shubh"))