import { User } from "./User";

// Mediator interface
export interface ChatRoom {
    showMessage(user: User, message: string): void;
    addUser(user: User): void;
}
