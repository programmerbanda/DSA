// Write a JavaScript function to implement a class with getters and setters. (Concept: Classes)


class VoterUser {
    constructor(username, age){
        this.username = username;
        this.age = age;
    }
    get age() {
        this.age
    }

    set age(value){
        if(value < 18){
            throw new Error(`Enter correct user age `)
        }
        this.age = value;
    }
}

const userA = new VoterUser("ProgrammerBanda", 16)
console.log(userA)