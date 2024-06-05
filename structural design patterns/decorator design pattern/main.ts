import { EmailNotifier } from "./email-notifier";
import { SMSDecorator, FacebookDecorator, SlackDecorator } from "./notifier-decorators";

const emailNotifier = new EmailNotifier([
  "user1@example.com",
  "user2@example.com",
]);

const combinedNotifier = new SlackDecorator(
  new FacebookDecorator(new SMSDecorator(emailNotifier))
);

combinedNotifier.send("Important message: House is on fire!");
