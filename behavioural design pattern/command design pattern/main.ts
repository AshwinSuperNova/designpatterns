import { Fan } from "./Fan";
import { FanOffCommand } from "./FanOffCommand";
import { FanOnCommand } from "./FanOnCommand";
import { Light } from "./Light";
import { LightOffCommand } from "./LightOffCommand";
import { LightOnCommand } from "./LightOnCommand";
import { RemoteControl } from "./RemoteControl";

// Client code
const light = new Light();
const fan = new Fan();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const fanOn = new FanOnCommand(fan);
const fanOff = new FanOffCommand(fan);

const remote = new RemoteControl();

// Turn on the light
remote.setCommand(lightOn);
remote.pressButton();

// Turn off the light
remote.setCommand(lightOff);
remote.pressButton();

// Turn on the fan
remote.setCommand(fanOn);
remote.pressButton();

// Turn off the fan
remote.setCommand(fanOff);
remote.pressButton();
