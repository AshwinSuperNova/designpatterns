import { AdvancedRemoteControl } from "./AdvancedRemoteControl";
import { Radio } from "./Radio";
import { RemoteControl } from "./RemoteControl";
import { TV } from "./TV";

// Client code
const tv = new TV();
const radio = new Radio();

const remoteControl = new RemoteControl(tv);
remoteControl.togglePower(); // TV is now ON.
remoteControl.volumeUp(); // TV volume set to 60.

const advancedRemoteControl = new AdvancedRemoteControl(radio);
advancedRemoteControl.togglePower(); // Radio is now ON.
advancedRemoteControl.volumeUp(); // Radio volume set to 40.
advancedRemoteControl.mute(); // Device is muted.
