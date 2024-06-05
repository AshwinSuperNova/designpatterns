import { Printer } from './DeviceInterfaces';
import { Scanner } from './DeviceInterfaces';

// Adapter class that adapts Scanner to Printer interface
export class ScannerToPrinterAdapter implements Printer {
  private scanner: Scanner;

  constructor(scanner: Scanner) {
    this.scanner = scanner;
  }

  print(document: string): void {
    const scannedDocument = this.scanner.scan();
    console.log(`Adapter converts scanned document to print: ${scannedDocument}`);
  }
}
