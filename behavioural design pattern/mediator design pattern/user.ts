import { Mediator } from "./mediator";

export class User {
  constructor(public name: string, private mediator: Mediator) {
    this.mediator.notify(this, "subscribe");
  }

  receiveMessage(message: string) {
    console.log(`Message received by ${this.name}: ${message}`);
  }

  publishMessage(message: string) {
    this.mediator.notify(this, "publish", message);
  }
}
