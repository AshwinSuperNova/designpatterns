import { Animal } from "./Animal";
import { AnimalVisitor } from "./AnimalVisitor";


export class Elephant implements Animal {
    public accept(visitor: AnimalVisitor): void {
        visitor.visitElephant(this);
    }

    public trumpet(): void {
        console.log("Elephant: Trumpet!");
    }
}
