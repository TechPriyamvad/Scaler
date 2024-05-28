package Design_Pattern.factory.assignments.abstract_factory.documentProcessing;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser.DocumentParser;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser.SpreadsheetDocumentParser;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer.DocumentPrinter;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer.SpreadsheetDocumentPrinter;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.DocumentProcessor;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.SpreadsheetDocumentProcessor;

public class SpreadsheetDocumentFactory extends DocumentFactory{
    public DocumentType supportsType() {
        return DocumentType.SPREAD_SHEET;
    }

    public DocumentProcessor createProcessor(String documentName) {
        return new SpreadsheetDocumentProcessor(documentName);
    }

    public DocumentParser createParser(String path) {
        return new SpreadsheetDocumentParser(path);
    }

    public DocumentPrinter createPrinter(DocumentProcessor processor) {
        return new SpreadsheetDocumentPrinter(processor);
    }
}
