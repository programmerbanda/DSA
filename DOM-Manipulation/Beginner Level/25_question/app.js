// Write a JavaScript function to replace an element with another in the DOM. (Concept: DOM
// Manipulation)

const container = document.querySelector(".container");
const newElement = document.createElement('span');
newElement.textContent = `New Content`;
container.replaceWith(newElement)
