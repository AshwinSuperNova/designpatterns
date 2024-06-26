import { MonkeyHandler } from "./concrete-handlers";
import { SquirrelHandler } from "./concrete-handlers";
import { DogHandler } from "./concrete-handlers";
import { clientCode } from "./client";

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log("Chain: Monkey > Squirrel > Dog\n");
clientCode(monkey);
console.log("");

console.log("Subchain: Squirrel > Dog\n");
clientCode(squirrel);
