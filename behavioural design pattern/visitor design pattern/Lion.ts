import { Animal } from "./Animal";
import { AnimalVisitor } from "./AnimalVisitor";

// Concrete Animal Classes

export class Lion implements Animal {
    public accept(visitor: AnimalVisitor): void {
        visitor.visitLion(this);
    }

    public roar(): void {
        console.log("Lion: Roar!");
    }
}
