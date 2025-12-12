// Implement a JavaScript program to count vowels in a string. (Concept: Strings)

const countVowels = (str) => {
    if(!str || typeof str !== 'string') return `Please Enter a string!`;
    const arrayString = str.toLowerCase().split('');
    let count = 0;
    for(let i = 0; i < arrayString.length; i++){
        if(arrayString[i] === 'a' || arrayString[i] === 'e' || arrayString[i] === 'i' || arrayString[i] === 'o' || arrayString[i] === 'u'){
            count++
        }
    }
    return `Total Vowels is ${count}!`;
}
console.log(countVowels('Shubham'))