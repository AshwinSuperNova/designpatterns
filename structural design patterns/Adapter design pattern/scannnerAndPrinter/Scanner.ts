// Concrete implementation of Scanner interface
import { Scanner } from './DeviceInterfaces';
export class BasicScanner implements Scanner {
    scan(): string {
      return "Basic scanner scanned document";
    }
  }
  