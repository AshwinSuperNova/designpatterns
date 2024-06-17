import { AddExpression } from "./AddExpression";
import { NumberExpression } from "./NumberExpression";
import { SubtractExpression } from "./SubtractExpression";

// Client code
const five = new NumberExpression(5);
const three = new NumberExpression(3);
const two = new NumberExpression(2);

const addExpression = new AddExpression(five, three);
const subtractExpression = new SubtractExpression(addExpression, two);
console.log(`Result of "5 + 3": ${addExpression.interpret()}`); // Output: 8
console.log(`Resultof "8 -2 ": ${subtractExpression.interpret()}`); // Output: 6

// Additional Client code to demonstrate more complex expressions
const ten = new NumberExpression(10);
const addExpression2 = new AddExpression(ten, subtractExpression); // (10 + (5 + 3) - 2)
console.log(`Result "10 + 6": ${addExpression2.interpret()}`); // Output: 16

