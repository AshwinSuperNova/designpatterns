import { DocDataMiner } from "./doc-data-miner";
import { CSVDataMiner } from "./csv-data-miner";
import { PDFDataMiner } from "./pdf-data-miner";

// Client code
const docDataMiner = new DocDataMiner();
const csvDataMiner = new CSVDataMiner();
const pdfDataMiner = new PDFDataMiner();

docDataMiner.mine("data.doc");
csvDataMiner.mine("data.csv");
pdfDataMiner.mine("data.pdf");
