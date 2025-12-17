    // Write a JavaScript function to find the second largest element in an array. (Concept: Arrays)

const findLargestAndSecondLargest = (arr) => {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    if (secondLargest === -Infinity) {
        return "There is no second largest element.";
    }
    return secondLargest;
}
console.log(findLargestAndSecondLargest([122, 358, 1, 10, 34, 1])); // Output: 34