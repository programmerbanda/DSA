// Implement a JavaScript program to handle a form submission event. (Concept: Event Handling)

const username = document.getElementById('username');
const password = document.getElementById('password');
const submutBtn = document.querySelector('button');
submutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Username:', username.value);
    console.log('Password:', password.value);
    username.value = '';
    password.value = '';
});