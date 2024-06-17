import { Graphic } from "./Graphic";

// Leaf class: Circle and Square are leaf classes that implement the Graphic interface. Each has its own implementation of the draw method.
export class Circle implements Graphic {
    constructor(private radius: number) { }

    draw(): void {
        console.log(`Drawing a Circle with radius: ${this.radius}`);
    }
}
