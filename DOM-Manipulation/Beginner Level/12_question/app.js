// Create a JavaScript function to clone an element using cloneNode(). (Concept: DOM Cloning)

const item1 = document.getElementById('item1');
const cloneItem = item1.cloneNode(true);

cloneItem.id = "clone";
cloneItem.textContent = "This is my name"
console.log(cloneItem);

document.querySelector('ul').appendChild(cloneItem)