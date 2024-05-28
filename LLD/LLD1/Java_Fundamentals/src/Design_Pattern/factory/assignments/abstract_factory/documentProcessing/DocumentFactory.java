package Design_Pattern.factory.assignments.abstract_factory.documentProcessing;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser.DocumentParser;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer.DocumentPrinter;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.DocumentProcessor;

public abstract class DocumentFactory {
    public abstract DocumentType supportsType();
    public abstract DocumentProcessor createProcessor(String documentName);
    public abstract DocumentParser createParser(String path);
    public abstract DocumentPrinter createPrinter(DocumentProcessor processor);
}
