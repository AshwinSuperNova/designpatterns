import { Visitor } from "./visitor";
import { City, Industry, SightSeeing } from "./node";

export class ExportVisitor implements Visitor {
  visitCity(city: City) {
    console.log(`Exporting City node to XML: ${city.constructor.name}`);
  }

  visitIndustry(industry: Industry) {
    console.log(`Exporting Industry node to XML: ${industry.constructor.name}`);
  }

  visitSightSeeing(sightSeeing: SightSeeing) {
    console.log(`Exporting SightSeeing node to XML: ${sightSeeing.constructor.name}`);
  }
}
 