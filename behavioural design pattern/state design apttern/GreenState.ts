import { TrafficLight } from "./TrafficLight";
import { State } from "./State";

export class GreenState implements State {
    private trafficLight: TrafficLight;

    constructor(trafficLight: TrafficLight) {
        this.trafficLight = trafficLight;
    }

    public handle(): void {
        console.log("Green Light - Go");
        this.trafficLight.setState(this.trafficLight.getYellowState());
    }
}
