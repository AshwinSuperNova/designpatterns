import { PersonA, PersonC } from "./PersonInterfaces";

export class SpanishToEnglishAdapter implements PersonA {
    private personC: PersonC;

    constructor(personC: PersonC) {
        this.personC = personC;
    }

    speakEnglish(): void {
        console.log("Adapter translates Spanish to English:");
        this.personC.speakSpanish();
    }
}