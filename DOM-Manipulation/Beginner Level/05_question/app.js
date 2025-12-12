// Implement a JavaScript program to create a new div element dynamically. (Concept: DOM
// Creation)
const body = document.querySelector('body')
const createDiv = () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = `This div is created form JavaScript!.`;
    body.appendChild(newDiv)
}
createDiv()