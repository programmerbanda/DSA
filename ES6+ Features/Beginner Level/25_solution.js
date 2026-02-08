function highlight(strings, value) {
    return strings[0] + "**" + value.toUpperCase() + "**" + strings[1];
}

const name = "alex";
const result = highlight`Hello ${name}, welcome!`;

console.log(result);
