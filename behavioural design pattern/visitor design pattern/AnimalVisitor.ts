import { Monkey } from "./Monkey";
import { Elephant } from "./Elephant";
import { Lion } from "./Lion";

// Visitor Interface
export interface AnimalVisitor {
    visitLion(lion: Lion): void;
    visitElephant(elephant: Elephant): void;
    visitMonkey(monkey: Monkey): void;
}
