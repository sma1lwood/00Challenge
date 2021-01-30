// Some kind of Vehicle
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }
    honk() {
        return `your ${this.year} ${this.make} ${this.model} goes "beep!!"`;
    }
    toString() {
        return `The Vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "Vroom!";
    }
}
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles allowed in here!!"
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry Guy, we're full!"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}