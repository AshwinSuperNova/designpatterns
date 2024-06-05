import { Graphic } from "./Graphic";

// Leaf class: Square
export class Square implements Graphic {
    constructor(private side: number) { }

    draw(): void {
        console.log(`Drawing a Square with side: ${this.side}`);
    }
}
