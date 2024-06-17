import { TrafficLight } from "./TrafficLight";
import { State } from "./State";

// Concrete States
export class RedState implements State {
    private trafficLight: TrafficLight;

    constructor(trafficLight: TrafficLight) {
        this.trafficLight = trafficLight;
    }

    public handle(): void {
        console.log("Red Light - Stop");
        this.trafficLight.setState(this.trafficLight.getGreenState());
    }
}
