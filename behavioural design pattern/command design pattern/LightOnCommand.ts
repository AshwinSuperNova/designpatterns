import { Command } from "./Command";
import { Light } from "./Light";

// LightOnCommand class (Concrete Command)
export class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOn();
    }
}
