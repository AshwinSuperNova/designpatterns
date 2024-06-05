import { TerminalExpression } from "./terminal-expression";
import { OrExpression } from "./or-expression";
import { AndExpression } from "./and-expression";

// Terminal expressions
const isJava = new TerminalExpression("Java");
const isJavaScript = new TerminalExpression("JavaScript");
const isPython = new TerminalExpression("Python");
const isCSharp = new TerminalExpression("C#");

// Composite expressions
const isProgrammingLanguage = new OrExpression(
  new OrExpression(isJava, isJavaScript),
  new OrExpression(isPython, isCSharp)
);

const isJavaAndJavaScript = new AndExpression(isJava, isJavaScript);
const isPythonAndCSharp = new AndExpression(isPython, isCSharp);

// Different contexts
const contexts = [
  "Java",
  "Python",
  "JavaScript",
  "C#",
  "Ruby",
  "JavaScript and Java",
  "Python and C#",
  "C++",
  "Java and JavaScript",
  "Python and JavaScript",
];

// Interpret each context
contexts.forEach((context) => {
  console.log(`"${context}" is a programming language? ${isProgrammingLanguage.interpret(context)}`);
});

console.log("");

console.log(`"Java and JavaScript" contains both Java and JavaScript? ${isJavaAndJavaScript.interpret("Java and JavaScript")}`);
console.log(`"Python and C#" contains both Python and C#? ${isPythonAndCSharp.interpret("Python and C#")}`);
