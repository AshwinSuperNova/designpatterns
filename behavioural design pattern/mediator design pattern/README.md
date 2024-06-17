Definition
The Mediator design pattern is a behavioral design pattern that allows objects to communicate with each other without having to know each other's concrete classes. The mediator pattern promotes loose coupling by keeping objects from referring to each other explicitly, and it allows you to vary their interactions independently.

Scenario: Chat Room
Imagine you are developing a chat application where multiple users can send messages to each other. Instead of each user directly sending messages to every other user, you can use the Mediator design pattern to manage the communication. The chat room acts as a mediator, facilitating the communication between users.