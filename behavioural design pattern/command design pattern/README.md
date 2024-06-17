Definition
The Command design pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations.

Scenario: Remote Control for Home Appliances
Imagine you are developing a remote control system for home appliances like lights and fans. The remote control can send commands to turn the appliances on and off. Using the Command design pattern, you can encapsulate each request as an object, allowing you to parameterize the remote control with different commands and execute them as needed.
