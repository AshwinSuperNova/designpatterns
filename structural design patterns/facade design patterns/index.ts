import { Computer } from "./computer";
import { ComputerFacade } from "./computer-facade";

/**
 * Demonstrates the Facade pattern.
 * The Facade pattern provides a simplified interface to a complex subsystem.
 */
class FacadeDemo {
    constructor() {
        const computer = new Computer();
        const computerFacade = new ComputerFacade(computer);

        console.log('Turning on the computer:');
        computerFacade.turnOn();

        console.log('\nTurning off the computer:');
        computerFacade.turnOff();
    }
}

new FacadeDemo();
