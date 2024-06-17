import { Command } from "./Command";
import { Fan } from "./Fan";

// FanOffCommand class (Concrete Command)
export class FanOffCommand implements Command {
    private fan: Fan;

    constructor(fan: Fan) {
        this.fan = fan;
    }

    public execute(): void {
        this.fan.turnOff();
    }
}
