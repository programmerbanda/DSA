// Write a JavaScript function to check if a year is a leap year. (Concept: Math)


const checkLeapYear = (year) => {
    if(!year) return `Please Enter a year!`;
    if((year % 400 === 0) || (year % 4  === 0 && year % 100 !== 0)){
        return `This is Leap Year!`
    } else {
        return `This is Not a Leap Year!`
    }
}

console.log(checkLeapYear(2000))