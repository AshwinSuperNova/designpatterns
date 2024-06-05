import { ChatAppMediator } from "./chat-app-mediator";
import { User } from "./user";

const chatAppMediator = new ChatAppMediator();
const user1 = new User("Lightning", chatAppMediator);
const user2 = new User("Doc", chatAppMediator);
const user3 = new User("Mater", chatAppMediator);

user1.publishMessage("Catchaw");
user2.publishMessage("Ey kid");
user3.publishMessage("Tomato");
