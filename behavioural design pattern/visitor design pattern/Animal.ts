import { AnimalVisitor } from "./AnimalVisitor";

// Animal Interface
export interface Animal {
    accept(visitor: AnimalVisitor): void;
}
