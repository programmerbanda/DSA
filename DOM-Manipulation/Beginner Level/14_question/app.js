// Implement a JavaScript program to add multiple event listeners to an element. (Concept:
// Event Handling)

const btn = document.querySelector('button');

const clicked = () => {
    let count = 0
    return function(){
        count++;
        console.log(`Button clicked ${count} times`);
    }
}

const click = clicked()
btn.addEventListener("click", click)