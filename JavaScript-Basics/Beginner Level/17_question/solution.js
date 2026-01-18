// Implement a JavaScript program to convert a string to uppercase without toUpperCase().
// (Concept: Strings)

const toUpperCase = (str) => {
    if(!str) return `Please Enter a String!?`;
    const char = 'abcdefghijklmnopqrstuvwxyz';
    let upperStr = '';
    for(let i = 0; i < str.length; i++) {
        const index = char.indexOf(str[i]);
        if(index !== -1) {
            upperStr += String.fromCharCode(str.charCodeAt(i) - 32);
        } else {
            upperStr += str[i];
        }
    }
    return upperStr;
}

console.log(toUpperCase("hello world!")); // "HELLO WORLD!"