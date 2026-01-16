// Create a JavaScript function to use array methods like map() for transformation. (Concept:
// Array Methods)


const studentMarks = [34, 56, 87, 39, 48, 28, 79, 98, 94];
const failedStudents = studentMarks.map(marks => marks > 30);
const addMarksInStudendts = studentMarks.map(mark => mark > 40 ? mark : mark + 10)
console.log(failedStudents)
console.log(addMarksInStudendts)