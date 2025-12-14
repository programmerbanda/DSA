// Write a JavaScript function to get all elements with a specific class using querySelectorAll.
// (Concept: DOM Selection)


const getElementsByClass = (className) => {
    return document.querySelectorAll(`.${className}`);
}

console.log(getElementsByClass('item'))