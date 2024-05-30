import { PersonB } from "./PersonInterfaces";

export class FrenchSpeaker implements PersonB {
    speakFrench(): void {
        console.log("Person B speaks in French.");
    }
}