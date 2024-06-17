import { Command } from "./Command";
import { Light } from "./Light";

// LightOffCommand class (Concrete Command)
export class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOff();
    }
}
