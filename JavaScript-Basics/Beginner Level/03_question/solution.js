// Create a JavaScript function to reverse an array without using reverse(). (Concept: Arrays)

const reversedArray = function(arr){
    if(!arr) return `Please Enter a array!`;
    let reversedArr = [];
    for(let i = arr.length -1; i >= 0; i--){
        reversedArr.push(arr[i])
    }
    return reversedArr;
}

console.log(reversedArray(["shubham", "tiwari", "users", "turbo"]))