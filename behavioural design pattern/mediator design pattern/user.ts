import { ChatRoom } from "./ChatRoom";

// User class

export class User {
    private name: string;
    private mediator: ChatRoom;

    constructor(name: string, mediator: ChatRoom) {
        this.name = name;
        this.mediator = mediator;
        this.mediator.addUser(this);
    }

    public getName(): string {
        return this.name;
    }

    public sendMessage(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.showMessage(this, message);
    }

    public receiveMessage(sender: string, message: string): void {
        console.log(`${this.name} receives from ${sender}: ${message}`);
    }
}
