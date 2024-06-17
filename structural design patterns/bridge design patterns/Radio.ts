import { Device } from "./Device";

// Concrete Implementation: Radio
export class Radio implements Device {
    private enabled: boolean = false;
    private volume: number = 30;

    public isEnabled(): boolean {
        return this.enabled;
    }

    public enable(): void {
        this.enabled = true;
        console.log("Radio is now ON.");
    }

    public disable(): void {
        this.enabled = false;
        console.log("Radio is now OFF.");
    }

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(volume: number): void {
        this.volume = volume;
        console.log(`Radio volume set to ${this.volume}.`);
    }
}
