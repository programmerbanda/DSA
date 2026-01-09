// Create a JavaScript function to check if an array is sorted. (Concept: Arrays)


const checkSorted = function(arr){
    if(!arr) return "Array is not defined";
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }    return true;
}

console.log(checkSorted([1,2,3,4,5])); // true
console.log(checkSorted([5,3,4,1,2])); // false