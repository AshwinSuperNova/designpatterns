import { InterpreterContext } from "./InterpreterContext";
import { parseExpression } from "./parseExpression";

const expression1 = "3 + 5";
const parsedExpression1 = parseExpression(expression1);
const context1 = new InterpreterContext(parsedExpression1);
console.log(`${expression1} = ${context1.interpret()}`); // Output: 3 + 5 = 8

const expression2 = "10 - 2 + 3";
const parsedExpression2 = parseExpression(expression2);
const context2 = new InterpreterContext(parsedExpression2);
console.log(`${expression2} = ${context2.interpret()}`); // Output: 10 - 2 + 3 = 11

const expression3 = "10 + 2 - 3";
const parsedExpression3 = parseExpression(expression3);
const context3 = new InterpreterContext(parsedExpression3);
console.log(`${expression3} = ${context3.interpret()}`); // Output: 10 + 2 - 3 = 9