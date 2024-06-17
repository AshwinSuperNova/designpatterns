import { Command } from "./Command";
import { Fan } from "./Fan";

// FanOnCommand class (Concrete Command)
export class FanOnCommand implements Command {
    private fan: Fan;

    constructor(fan: Fan) {
        this.fan = fan;
    }

    public execute(): void {
        this.fan.turnOn();
    }
}
