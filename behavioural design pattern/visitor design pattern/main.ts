import { City, Industry, SightSeeing, Node } from "./node";
import { ExportVisitor } from "./export-visitor";

const graph: Node[] = [new City(), new Industry(), new SightSeeing()];

const xmlExportVisitor = new ExportVisitor();

graph.forEach((node) => node.accept(xmlExportVisitor));
