import { Graphic } from "./Graphic";

// Composite class: Drawing
export class Drawing implements Graphic {
    private graphics: Graphic[] = [];

    add(graphic: Graphic) {
        this.graphics.push(graphic);
    }

    remove(graphic: Graphic) {
        this.graphics = this.graphics.filter(g => g !== graphic);
    }

    draw(): void {
        console.log("Drawing contains:");
        for (const graphic of this.graphics) {
            graphic.draw();
        }
    }
}
