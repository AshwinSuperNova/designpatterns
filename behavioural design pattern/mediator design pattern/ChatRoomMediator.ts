import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

// ChatRoomMediator class
export class ChatRoomMediator implements ChatRoom {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public showMessage(user: User, message: string): void {
        const time = new Date().toLocaleTimeString();
        console.log(`${time} [${user.getName()}]: ${message}`);

        // Notify all users except the sender
        for (const u of this.users) {
            if (u !== user) {
                u.receiveMessage(user.getName(), message);
            }
        }
    }
}
