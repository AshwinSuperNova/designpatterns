import { DataMiner } from "./data-miner";

export class CSVDataMiner extends DataMiner {
  openFile(path: string) {
    console.log(`Opening CSV file: ${path}`);
  }

  extractData() {
    console.log("Extracting data from CSV file");
  }

  closeFile() {
    console.log("Closing CSV file");
  }

  parseData() {
    console.log("Parsing data from CSV file");
  }
}
