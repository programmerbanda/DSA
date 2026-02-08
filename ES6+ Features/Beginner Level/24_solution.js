// Create a JavaScript function to use default parameters with objects. (Concept: Default Parameters)


const myFunction = ({firstname = "Programmer", lastname = "Banda"} = {}) =>  {
    console.log(firstname, lastname)
}

myFunction()