// Implement a JavaScript program to remove duplicates from an array. (Concept: Arrays)


const removeDuplicate = (arr) => {
    if(!arr || arr.length < 0) return `Please Enter a Array!`;
    const uniqueArray = [...new Set(arr)];
    return [uniqueArray, arr]
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]))