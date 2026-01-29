// Write a JavaScript function to use spread operator to clone objects. (Concept: Spread Operator)


const studentDetails = {
    firstname : "Shubham",
    lastname : "Tiwari",
    profession : "Programmer",
}

console.log(studentDetails)

const secondStudentDetails = {...studentDetails};
secondStudentDetails.firstname = "Turbo"
console.log(secondStudentDetails)