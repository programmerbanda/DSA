// Create a JavaScript function to handle keyboard events (e.g., keypress). (Concept: Event
// Handling)

const display = document.querySelector('.display');

document.addEventListener("keypress", (e)=> {
    display.textContent = `${e.key.toUpperCase()}`
})