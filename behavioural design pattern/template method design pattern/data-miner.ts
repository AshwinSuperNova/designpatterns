export abstract class DataMiner {
    // Template method: Define the overall data mining process
    mine(path: string): void {
      this.openFile(path);
      this.extractData();
      this.parseData();
      this.analyzeData();
      this.sendReport();
      this.closeFile();
    }
  
    // Abstract methods: Subclasses must implement these
    abstract openFile(path: string): void;
    abstract extractData(): void;
    abstract closeFile(): void;
    abstract parseData(): void;
  
    // Optional methods: Default implementations are provided and can be overridden
    analyzeData() {
      console.log("Analyzing data... (Default implementation)");
    }
  
    sendReport() {
      console.log("Sending report... (Default implementation)");
    }
  }
  