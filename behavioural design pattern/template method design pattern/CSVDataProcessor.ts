import { DataProcessor } from "./DataProcessor";

// Concrete Class for CSV
export class CSVDataProcessor extends DataProcessor {
    protected readData(): void {
        console.log("Reading data from CSV file.");
    }

    protected processData(): void {
        console.log("Processing CSV data.");
    }

    protected saveData(): void {
        console.log("Saving processed CSV data.");
    }
}
