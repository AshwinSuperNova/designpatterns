import { PersonA } from "./PersonInterfaces";

export class EnglishSpeaker implements PersonA {
    speakEnglish(): void {
        console.log("Person A speaks in English.");
    }
}