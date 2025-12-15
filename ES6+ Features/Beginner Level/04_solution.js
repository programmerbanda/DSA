// Write a JavaScript function to destructure an object into variables. (Concept: Destructuring)


const getSimpleData = {
    firstname : "Shubham",
    lastname : "Tiwari",
    age : 21,
    college : "Indira Gandhi National Open University",
    profession : ["Developer", "Youtuber"]
}


console.log(getSimpleData)

const {firstname, profession} = getSimpleData;
console.log(firstname)
console.log(profession)