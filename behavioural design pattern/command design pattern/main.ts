import { Invoker } from "./invoker";
import { SimpleCommand } from "./simple-command";
import { ComplexCommand } from "./complex-command";
import { Receiver } from "./receiver";

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.doSomethingImportant();
