import { Image } from "./index";

// Real Subject
export class RealImage implements Image {
    private fileName: string;
    private width: number;
    private height: number;

    constructor(fileName: string, width: number, height: number) {
        this.fileName = fileName;
        this.width = width;
        this.height = height;
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Loading ${this.fileName}`);
    }

    public display(): void {
        console.log(`Displaying ${this.fileName} [${this.width}x${this.height}]`);
    }

    public getDimensions(): { width: number; height: number; } {
        return { width: this.width, height: this.height };
    }

    public resize(width: number, height: number): void {
        this.width = width;
        this.height = height;
        console.log(`Resizing ${this.fileName} to [${this.width}x${this.height}]`);
    }
}
