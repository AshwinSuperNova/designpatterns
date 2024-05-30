import { PersonA, PersonB } from "./PersonInterfaces";

export class LanguageAdapter implements PersonA, PersonB {
    private personA: PersonA | null = null;
    private personB: PersonB | null = null;

    constructor(person: PersonA | PersonB) {
        if ('speakEnglish' in person) {
            this.personA = person;
        } else if ('speakFrench' in person) {
            this.personB = person;
        }
    }

    speakEnglish(): void {
        if (this.personB) {
            console.log("Adapter translates French to English:");
            this.personB.speakFrench();
        } else if (this.personA) {
            this.personA.speakEnglish();
        }
    }

    speakFrench(): void {
        if (this.personA) {
            console.log("Adapter translates English to French:");
            this.personA.speakEnglish();
        } else if (this.personB) {
            this.personB.speakFrench();
        }
    }
}