import { GreenState } from "./GreenState";
import { RedState } from "./RedState";
import { State } from "./State";
import { YellowState } from "./YellowState";

// Context Class

export class TrafficLight {
    private redState: State;
    private yellowState: State;
    private greenState: State;
    private currentState: State;

    constructor() {
        this.redState = new RedState(this);
        this.yellowState = new YellowState(this);
        this.greenState = new GreenState(this);

        this.currentState = this.redState; // Initial state
    }

    public setState(state: State): void {
        this.currentState = state;
    }

    public getRedState(): State {
        return this.redState;
    }

    public getYellowState(): State {
        return this.yellowState;
    }

    public getGreenState(): State {
        return this.greenState;
    }

    public change(): void {
        this.currentState.handle();
    }
}
