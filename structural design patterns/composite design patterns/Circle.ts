import { Graphic } from "./Graphic";

// Leaf class: Circle
export class Circle implements Graphic {
    constructor(private radius: number) { }

    draw(): void {
        console.log(`Drawing a Circle with radius: ${this.radius}`);
    }
}
