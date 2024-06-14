import { CloneFactory } from "./clone-factory";
import { Sheep } from "./sheep";

class PrototypeDemo {
    constructor() {
        const originalSheep = new Sheep('Dolly');
        originalSheep.description();

        const cloneFactory = new CloneFactory();
        const clonedSheep = cloneFactory.getClone(originalSheep) as Sheep;
        clonedSheep.name = 'Mini';
        clonedSheep.description();
    }
}

new PrototypeDemo();