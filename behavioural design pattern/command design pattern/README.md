Definition
The Chain of Responsibility design pattern allows an object to pass a request along a chain of potential handlers until the request is handled. This pattern decouples the sender and receiver of the request, giving multiple objects a chance to handle the request.

Scenario: Handling Food Requests
Imagine a zoo where different animals have specific preferences for food. A monkey likes bananas, a squirrel likes nuts, and a dog likes meatballs. When a food item is offered, it should be passed to the appropriate animal handler. If an animal doesn't want the food, it passes the food request to the next animal in the chain.