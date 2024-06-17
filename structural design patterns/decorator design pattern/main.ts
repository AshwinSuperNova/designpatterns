import { EmailNotifier } from "./email-notifier";
import { SMSDecorator, FacebookDecorator, SlackDecorator } from "./notifier-decorators";

const emailNotifier = new EmailNotifier([
  "ashwinrockers0953@gmail.com",
  "ashwinrockers378@gmail.com",
  "ashwinrockers873@gmail.com",
  "ashwinrockers7687@gmail.com",
]);

const combinedslackfacebookNotifier = new SlackDecorator(
  new FacebookDecorator(emailNotifier)
);
combinedslackfacebookNotifier.send("Important message: storm is coming");
const combinedNotifier = new SlackDecorator(
  new FacebookDecorator(new SMSDecorator(emailNotifier))
);

combinedNotifier.send("Important message: House is on fire!");
