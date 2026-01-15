// Create a JavaScript function to merge two sorted arrays. (Concept: Arrays)

const sortedArray = function(arr, arr2){
    if(!arr || !arr2) return `Please enter correct array!`;
    const firstArray = arr.sort((a, b) => a - b)
    const secondArray = arr2.sort()
    return [firstArray, secondArray]
}

console.log(sortedArray([1, 2, 83, 64, 35, 16, 7, 8,9,10], ["Shubham", "Array", "Saloni", "Trending", "Singh", "Tiwari"]))