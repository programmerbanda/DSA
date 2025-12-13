// Create a JavaScript function to remove an element from the DOM. (Concept: DOM Removal)

const removeButton = document.getElementById('removeBtn');
const title = document.getElementById('title');
const container = document.querySelector('.container');


removeButton.addEventListener("click", ()=> {
    container.removeChild(title)  
})