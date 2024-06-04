import { PersonC } from "./PersonInterfaces";

export class SpanishSpeaker implements PersonC {
    speakSpanish(): void {
        console.log("Person C speaks in Spanish.");
    }
}