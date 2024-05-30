import { EnglishSpeaker } from "./EnglishSpeaker";
import { FrenchSpeaker } from "./FrenchSpeaker";
import { SpanishSpeaker } from "./SpanishSpeaker";
import { LanguageAdapter } from "./LanguageAdapter";
import { SpanishToEnglishAdapter } from "./SpanishToEnglishAdapter";
import { PersonA, PersonB, PersonC } from "./PersonInterfaces";

// Create an instance of an English speaker
const englishSpeaker: PersonA = new EnglishSpeaker();

// Create an instance of a French speaker
const frenchSpeaker: PersonB = new FrenchSpeaker();

// Create an adapter to translate French to English
const frenchToEnglishAdapter: PersonA = new LanguageAdapter(frenchSpeaker);
console.log("French to English:");
// Use the adapter to make the French speaker speak English
frenchToEnglishAdapter.speakEnglish();

// Create an adapter to translate English to French
const englishToFrenchAdapter: PersonB = new LanguageAdapter(englishSpeaker);
console.log("English to French:");
// Use the adapter to make the English speaker speak French
englishToFrenchAdapter.speakFrench();

// Create an instance of a Spanish speaker
const spanishSpeaker: PersonC = new SpanishSpeaker();

// Create an adapter to translate Spanish to English
const spanishToEnglishAdapter: PersonA = new SpanishToEnglishAdapter(spanishSpeaker);

console.log("Spanish to English:");
// Use the adapter to make the Spanish speaker speak English
spanishToEnglishAdapter.speakEnglish();