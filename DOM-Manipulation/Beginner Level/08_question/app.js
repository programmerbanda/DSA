// Implement a JavaScript program to append a child element to a parent. (Concept: DOM
// Creation)


const parentElement = document.querySelector('body');
const childElement = document.createElement('div');
childElement.textContent = 'This is a child element';
parentElement.appendChild(childElement);