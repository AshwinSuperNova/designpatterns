import { State } from "./state";
import { DraftState } from "./draft-state";

export class Document {
  private state: State;

  constructor() {
    this.state = new DraftState(this);
  }

  changeState(state: State) {
    this.state = state;
  }

  render() {
    this.state.render();
  }

  publish() {
    this.state.publish();
  }
}
