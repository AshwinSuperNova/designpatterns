import { ProxyImage } from "./ProxyImage";

// Subject Interface
export interface Image {
    display(): void;
    getDimensions(): { width: number; height: number };
    resize(width: number, height: number): void;
}

 // Client code
const image1 = new ProxyImage("image1.jpg", 1024, 768);
const image2 = new ProxyImage("image2.png", 800, 600);

// Images will be loaded from disk and displayed on demand
image1.display(); // Output: Loading image1.jpg \n Displaying image1.jpg [1024x768]
image2.display(); // Output: Loading image2.png \n Displaying image2.png [800x600]

// Subsequent calls to display will not reload the images from disk
image1.display(); // Output: Displaying image1.jpg [1024x768]
image2.display(); // Output: Displaying image2.png [800x600]

// Get dimensions of images
console.log(image1.getDimensions()); // Output: { width: 1024, height: 768 }
console.log(image2.getDimensions()); // Output: { width: 800, height: 600 }

// Resize images
image1.resize(1280, 720); // Output: Resizing image1.jpg to [1280x720]
image2.resize(1920, 1080); // Output: Resizing image2.png to [1920x1080]

// Display resized images
image1.display(); // Output: Displaying image1.jpg [1280x720]
image2.display(); // Output: Displaying image2.png [1920x1080]export 
