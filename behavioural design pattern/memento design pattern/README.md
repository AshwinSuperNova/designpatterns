Definition
The Memento design pattern is a behavioral design pattern that allows you to capture and externalize an object's internal state so that the object can be restored to this state later without violating encapsulation.

Scenario: Text Editor with Undo Functionality
Imagine you are developing a text editor application that allows users to edit documents. The editor should support an undo feature that lets users revert to previous states of the document. The Memento design pattern can be used to implement this functionality by capturing the state of the document at different points in time and allowing the user to restore these states.