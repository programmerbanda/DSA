// Write a JavaScript function to use for...in loop for object properties. (Concept: Loops)


const studentDetails = {
    firstname : "Shubham",
    lastname : "Tiwari",
    profession : "Programmer",
}

for (const key in studentDetails) {  
    console.log(studentDetails[key])
}