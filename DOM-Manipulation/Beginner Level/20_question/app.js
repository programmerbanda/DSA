// Implement a JavaScript program to handle mouseover and mouseout events. (Concept:
// Event Handling)

const box = document.querySelector('.box');

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'lightblue';
});

box.addEventListener('mouseout', function() {
    box.style.backgroundColor = 'white';
});