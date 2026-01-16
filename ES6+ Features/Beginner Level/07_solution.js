// Write a JavaScript function to use spread operator to merge arrays. (Concept: Spread Operator)


const spreadArrays = (one, two) => {
    if(!one || !two) return `Please Enter Array!?`;
    const spreadedArray = [...one, ...two];
    return spreadedArray;
}


const arr = ["Shubham", "Tiwari", "Turbo", "Shubh", "Tiwa"]
const arr2 = ["Shubham tiwari", "Tiwari shubh", "Turboshubh", "Shubhjiii", "Tiwarijii"]
console.log(spreadArrays(arr, arr2))