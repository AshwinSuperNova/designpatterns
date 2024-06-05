import { State } from "./state";
import { Document } from "./document";
import { PublishedState } from "./published-state";

export class ModerationState implements State {
  constructor(private document: Document) {}

  render() {
    console.log("Rendering the document in Moderation state");
  }

  publish() {
    console.log("Making the document public in Published state");
    this.document.changeState(new PublishedState(this.document));
  }
}
