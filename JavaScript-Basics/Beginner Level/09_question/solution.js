// Create a JavaScript function to check if two strings are anagrams. (Concept: Strings)


const stringAnagram = (str1, str2) => {
    if(!str1 || !str2) return `Please Enter String!`;
    const normalize = str => str.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
    console.log(normalize(str1));
    console.log(normalize(str2));
    return normalize(str1) === normalize(str2);

}

console.log(stringAnagram("listen", "silent")); // true