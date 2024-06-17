import { ChatRoomMediator } from "./ChatRoomMediator";
import { User } from "./User";

// Client code
const chatRoom = new ChatRoomMediator();

const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const charlie = new User("Charlie", chatRoom);

alice.sendMessage("Hi Bob!");
bob.sendMessage("Hello Alice! How are you?");
alice.sendMessage("I'm good, thanks! How about you?");
charlie.sendMessage("Hey everyone! What's up?");
bob.sendMessage("Hi Charlie! We were just chatting.");
alice.sendMessage("Hi Charlie! Welcome to the chat.");
charlie.sendMessage("Thanks! It's great to be here.");
