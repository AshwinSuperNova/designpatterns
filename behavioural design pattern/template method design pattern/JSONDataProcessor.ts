import { DataProcessor } from "./DataProcessor";

// Concrete Class for JSON
export class JSONDataProcessor extends DataProcessor {
    protected readData(): void {
        console.log("Reading data from JSON file.");
    }

    protected processData(): void {
        console.log("Processing JSON data.");
    }

    protected saveData(): void {
        console.log("Saving processed JSON data.");
    }
}
