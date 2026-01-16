// Write a JavaScript function to use array methods like filter() for selection. (Concept: Array
// Methods)

const passedStudents = [
  {
    name: "Shubham",
    class: "10th",
    maths: 67,
    science: 87,
    hindi: 43,
    english: 98,
  },
  {
    name: "Shubh",
    class: "10th",
    maths: 46,
    science: 37,
    hindi: 29,
    english: 19,
  },
  {
    name: "Turbo",
    class: "10th",
    maths: 18,
    science: 12,
    hindi: 59,
    english: 99,
  },
  {
    name: "Tiwarijii",
    class: "10th",
    maths: 48,
    science: 18,
    hindi: 57,
    english: 29,
  },
  {
    name: "ProgrammerBanda",
    class: "10th",
    maths: 47,
    science: 74,
    hindi: 58,
    english: 29,
  },
];

const goodStudents = passedStudents
  .filter((student) => student.english > 60)
  .map((student) => `${student.name} : ${student.english}`);
console.log(passedStudents);
console.log(goodStudents);
