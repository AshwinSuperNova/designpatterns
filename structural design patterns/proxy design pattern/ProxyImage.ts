import { Image } from "./index";
import { RealImage } from "./RealImage";

// Proxy
export class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private fileName: string;
    private width: number;
    private height: number;

    constructor(fileName: string, width: number, height: number) {
        this.fileName = fileName;
        this.width = width;
        this.height = height;
    }

    private ensureRealImage(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.fileName, this.width, this.height);
        }
    }

    public display(): void {
        this.ensureRealImage();
        this.realImage.display();
    }

    public getDimensions(): { width: number; height: number; } {
        this.ensureRealImage();
        return this.realImage.getDimensions();
    }

    public resize(width: number, height: number): void {
        this.ensureRealImage();
        this.realImage.resize(width, height);
    }
}
