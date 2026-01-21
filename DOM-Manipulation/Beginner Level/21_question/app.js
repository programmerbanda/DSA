// Create a JavaScript function to change the innerHTML of an element safely. (Concept: DOM
// Basics)

const h1 = document.querySelector('h1');

function changeInnerHTML(newContent) {
    h1.innerHTML = `This Content has been changed using js!`;
}

changeInnerHTML();