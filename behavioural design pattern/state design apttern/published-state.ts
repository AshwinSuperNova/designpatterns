import { State } from "./state";
import { Document } from "./document";

export class PublishedState implements State {
  constructor(private document: Document) {}

  render() {
    console.log("Rendering the document in Published state");
  }

  publish() {
    console.log("The document is already in Published state. Nothing to do.");
  }
}
