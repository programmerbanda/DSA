// JSQ1. Write a JavaScript function to check if a string is a palindrome. (Concept: Strings)

const checkPalindrome = function(str){
    if(!str || str === "") return `Please Enter a string!`;
    const newStr = str.toLowerCase()
    const reversedString =  newStr.split('').reverse().join('');
    if(reversedString === newStr){
        return `This is Palindrome ${newStr} = ${reversedString}`
    } else {
        return `Not, This is not Palindrome ${newStr} != ${reversedString}`
    }
}

console.log(checkPalindrome("racecar"))
