import { AnimalVisitor } from "./AnimalVisitor";
import { Elephant } from "./Elephant";
import { Lion } from "./Lion";
import { Monkey } from "./Monkey";

// Concrete Visitor Class
export class FeedingVisitor implements AnimalVisitor {
    public visitLion(lion: Lion): void {
        console.log("Feeding the lion with meat.");
        lion.roar();
    }

    public visitElephant(elephant: Elephant): void {
        console.log("Feeding the elephant with fruits.");
        elephant.trumpet();
    }

    public visitMonkey(monkey: Monkey): void {
        console.log("Feeding the monkey with bananas.");
        monkey.screech();
    }
}
