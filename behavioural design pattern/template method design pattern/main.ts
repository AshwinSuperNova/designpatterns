import { CSVDataProcessor } from "./CSVDataProcessor";
import { JSONDataProcessor } from "./JSONDataProcessor";

// Client code
const csvProcessor = new CSVDataProcessor();
csvProcessor.process();

const jsonProcessor = new JSONDataProcessor();
jsonProcessor.process();
