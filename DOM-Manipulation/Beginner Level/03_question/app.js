// Create a JavaScript function to get the value of an input field. (Concept: DOM Basics)


const input = document.getElementById("input-box");
const button = document.querySelector("button");


const inputValue = input.value;
input.addEventListener("input", ()=>{
    console.log(input.value)
})
button.addEventListener("click", ()=>{
    if(!input.value) return
    alert(`Input Value is ${input.value}`)
    input.value = ""
})