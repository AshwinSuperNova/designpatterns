import { Animal } from "./Animal";
import { AnimalVisitor } from "./AnimalVisitor";


export class Monkey implements Animal {
    public accept(visitor: AnimalVisitor): void {
        visitor.visitMonkey(this);
    }

    public screech(): void {
        console.log("Monkey: Screech!");
    }
}
