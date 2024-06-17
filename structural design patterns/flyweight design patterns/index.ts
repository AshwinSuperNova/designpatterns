import { FlyweightFactory } from "./FlyweightFactory";

// Create the FlyweightFactory with initial shared states
const factory = new FlyweightFactory();

function addCarToDatabase(factory: FlyweightFactory, plates: string, owner: string, brand: string, model: string, color: string) {
    console.log('Adding a car to the database.');
    const flyweight = factory.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}

// Add cars to the database
addCarToDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToDatabase(factory, 'CL567GT', 'Jane Doe', 'BMW', 'X1', 'blue');
addCarToDatabase(factory, 'CL890UI', 'Alice Smith', 'Mercedes Benz', 'C300', 'black');

// List all flyweights
factory.listFlyweights();
