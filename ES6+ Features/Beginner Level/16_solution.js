//Write a JavaScript function to destructure an array into variables. (Concept: Destructuring)

const studentMarks = [67, 87, 98, 97];
const [topperOne, topperTwo] = studentMarks.sort((a, b) => b - a);
console.log(topperOne)
console.log(topperTwo)
