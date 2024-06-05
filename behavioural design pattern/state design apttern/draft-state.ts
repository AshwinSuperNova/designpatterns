import { State } from "./state";
import { Document } from "./document";
import { ModerationState } from "./moderation-state";

export class DraftState implements State {
  constructor(private document: Document) {}

  render() {
    console.log("Rendering the document in Draft state");
  }

  publish() {
    console.log("Moving the document to Moderation state");
    this.document.changeState(new ModerationState(this.document));
  }
}
