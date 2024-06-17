import { Device } from "./Device";

// Abstraction: Remote Control
export class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    public volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    public volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 10);
    }
}
