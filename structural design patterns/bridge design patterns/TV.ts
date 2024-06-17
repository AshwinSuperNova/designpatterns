import { Device } from "./Device";

// Concrete Implementation: TV
export class TV implements Device {
    private enabled: boolean = false;
    private volume: number = 50;

    public isEnabled(): boolean {
        return this.enabled;
    }

    public enable(): void {
        this.enabled = true;
        console.log("TV is now ON.");
    }

    public disable(): void {
        this.enabled = false;
        console.log("TV is now OFF.");
    }

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(volume: number): void {
        this.volume = volume;
        console.log(`TV volume set to ${this.volume}.`);
    }
}
