package Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.DocumentType;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.DocumentProcessor;

public class TextDocumentPrinter extends DocumentPrinter{
    public TextDocumentPrinter(DocumentProcessor processor) {
        super(processor);
    }

    public void printDocument() {
        // Print text document
    }

    @Override
    public DocumentType supportsType() {
        return DocumentType.TEXT;
    }
}
