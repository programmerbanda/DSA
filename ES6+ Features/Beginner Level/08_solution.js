// Implement a JavaScript program to create a class with constructor and methods. (Concept:
// Classes)

class Car {
    constructor(brand, name, model, price){
        this.brand = brand;
        this.name = name;
        this.model = model;
        this.price = price;
    }
    start(){
        console.log(`Start the Engine of ${this.name}`)
    }
    stop(){
        return `Please Engine of this ${this.brand} ${this.name}`
    }
}

const myCar = new Car("Toyota", "Fortuner", 2025, "55Lakh")
console.log(myCar)
console.log(myCar.start())
console.log(myCar.stop())