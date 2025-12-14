// Write a JavaScript function to find the maximum element in an array without Math.max().
// (Concept: Arrays)


const findMax = (str) => {
    if(!str || str.length < 0) return `Please Enter a correct array!`;
    let maxEle = str[0];
    for(let i = 1; i < str.length; i++){
        if(str[i] > maxEle){
            maxEle = str[i]
        }
    }
    return maxEle;
}

console.log(findMax([12, 57, 884, 847, 477, 83]))