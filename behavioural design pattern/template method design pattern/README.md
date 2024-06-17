Definition
The Template Method design pattern is a behavioral design pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

Scenario: Data Processing
Imagine you are developing a data processing system that processes different types of data. For example, you might have CSV and JSON data. The steps to process the data are the same, but the details of each step differ. The Template Method design pattern can be used to define the common steps in the base class and allow subclasses to implement the specific details.