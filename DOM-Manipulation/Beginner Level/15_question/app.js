// Create a JavaScript function to get the parent element of a node. (Concept: DOM Traversal)


const child = document.querySelector('.child');


const parent = child.parentElement;
const parents = child.parentNode;
console.log(parent)
console.log(parents.getAttribute("class"))