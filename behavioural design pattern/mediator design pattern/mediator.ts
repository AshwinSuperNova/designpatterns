import { User } from "./user";

export interface Mediator {
  notify(sender: User, event: string, payload?: string): void;
}
