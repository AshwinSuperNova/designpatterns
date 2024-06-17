import { RemoteControl } from "./RemoteControl";

// Refined Abstraction: Advanced Remote Control
export class AdvancedRemoteControl extends RemoteControl {
    public mute(): void {
        this.device.setVolume(0);
        console.log("Device is muted.");
    }
}
