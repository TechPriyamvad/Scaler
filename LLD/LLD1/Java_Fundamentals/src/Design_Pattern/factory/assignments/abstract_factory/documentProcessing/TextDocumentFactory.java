package Design_Pattern.factory.assignments.abstract_factory.documentProcessing;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser.DocumentParser;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser.TextDocumentParser;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer.DocumentPrinter;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer.TextDocumentPrinter;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.DocumentProcessor;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.TextDocumentProcessor;

public class TextDocumentFactory extends DocumentFactory{
    public DocumentType supportsType() {
        return DocumentType.TEXT;
    }

    public DocumentProcessor createProcessor(String documentName) {
        return new TextDocumentProcessor(documentName);
    }

    public DocumentParser createParser(String path) {
        return new TextDocumentParser(path);
    }

    public DocumentPrinter createPrinter(DocumentProcessor processor) {
        return new TextDocumentPrinter(processor);
    }
}
