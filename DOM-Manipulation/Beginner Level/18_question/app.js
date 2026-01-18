// Create a JavaScript function to toggle visibility of an element using display. (Concept: CSS
// Manipulation)

const h1 = document.querySelector('h1');
const  button = document.querySelector('button');
let visible = true
button.addEventListener("click", ()=> {
    if(visible){
        h1.style.display = 'none'
        visible = false;
    } else {
        h1.style.display = "block"
        visible = true
    }
})