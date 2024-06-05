import { Sheep } from "./sheep";
import { CloneFactory } from "./clone-factory";
class PrototypeDemo {

    constructor() {
        let sheep = new Sheep();
        sheep.name = 'Dolly';
        sheep.description();

        let sheepClone = new CloneFactory().getClone(sheep) as Sheep;
        sheepClone.name = 'Mini';
        sheepClone.description();

        console.log(sheep);
        console.log(sheepClone);
        
    }
}

new PrototypeDemo();
