import { Notifier } from "./notifier";

export class EmailNotifier implements Notifier {
  constructor(private emails: string[]) {}

  send(message: string): void {
    console.log(`Sending email to ${this.emails.join(", ")}: ${message}`);
  }
}
