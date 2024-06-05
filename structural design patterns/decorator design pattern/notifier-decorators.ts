import { Notifier } from "./notifier";

export class SMSDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
    this.notifier.send(message);
  }
}

export class FacebookDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): void {
    console.log(`Sending Facebook message: ${message}`);
    this.notifier.send(message);
  }
}

export class SlackDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): void {
    console.log(`Sending Slack message: ${message}`);
    this.notifier.send(message);
  }
}
