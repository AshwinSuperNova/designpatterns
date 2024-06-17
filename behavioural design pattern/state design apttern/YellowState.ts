import { TrafficLight } from "./TrafficLight";
import { State } from "./State";

export class YellowState implements State {
    private trafficLight: TrafficLight;

    constructor(trafficLight: TrafficLight) {
        this.trafficLight = trafficLight;
    }

    public handle(): void {
        console.log("Yellow Light - Slow down");
        this.trafficLight.setState(this.trafficLight.getRedState());
    }
}
