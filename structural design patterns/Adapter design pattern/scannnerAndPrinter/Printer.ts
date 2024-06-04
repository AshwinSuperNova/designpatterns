// Concrete implementation of Printer interface
import { Printer } from './DeviceInterfaces';
export class BasicPrinter implements Printer {
    print(document: string): void {
      console.log(`Basic printer prints: ${document}`);
    }
  }
  