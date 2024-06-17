// Abstract Class
export abstract class DataProcessor {
    // Template method
    public process(): void {
        this.readData();
        this.processData();
        this.saveData();
    }

    // Steps to be implemented by subclasses
    protected abstract readData(): void;
    protected abstract processData(): void;
    protected abstract saveData(): void;
}
