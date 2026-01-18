//Implement a JavaScript program to create a list from an array dynamically. (Concept: DOM
//Creation)


const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const createListFromArray =  function (array) {
    const listItem = document.getElementById("listitem");
    array.forEach(element => {
        const createItem = document.createElement('li');
        createItem.textContent = element;
        listItem.appendChild(createItem)
    });
}

createListFromArray(items)


