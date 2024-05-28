package Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.DocumentType;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.DocumentProcessor;

public abstract class DocumentPrinter {
    private final DocumentProcessor processor;

    public DocumentPrinter(DocumentProcessor processor) {
        this.processor = processor;
    }

    public DocumentProcessor getProcessor() {
        return processor;
    }

    public abstract void printDocument();

    public abstract DocumentType supportsType();
}
