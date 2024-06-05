import { Mediator } from "./mediator";
import { User } from "./user";

export class ChatAppMediator implements Mediator {
  private users: User[] = [];

  public notify(sender: User, event: string, payload?: string): void {
    if (event === "subscribe") {
      console.log(`Subscribing ${sender.name}`);
      this.users.push(sender);
    }

    if (event === "publish") {
      console.log(`Publishing message "${payload}" to the group`);
      this.users.filter(user => user !== sender).forEach(user => user.receiveMessage(payload));
    }
  }
}
