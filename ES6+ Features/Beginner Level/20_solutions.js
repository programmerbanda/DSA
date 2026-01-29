// Implement a JavaScript program to use class inheritance with extends. (Concept: Classes)



class Car {
    constructor(brand, model, name) {
        this.brand = brand;
        this.model = model;
        this.name = name;
    }
    start(){
        return `Start the ${this.name} Engine`
    }
    stop(){
        return `Stop the ${this.name} Engine`
    }
}

class ElectricCar extends Car {
    constructor(brand, model, name, batteryCapacity){
        super(brand, model, name);
        this.batteryCapacity = batteryCapacity;
    }
    charge () {
        return `Charging the battery!`
    }
}


const myCar = new ElectricCar("Tesla", 2025, "PiModel", "220 kWh")
console.log(myCar)
console.log(myCar.start())
console.log(myCar.stop())