import { City } from "./node";
import { Industry } from "./node";
import { SightSeeing } from "./node";

export interface Visitor {
  visitCity(city: City): void;
  visitIndustry(industry: Industry): void;
  visitSightSeeing(sightSeeing: SightSeeing): void;
}
