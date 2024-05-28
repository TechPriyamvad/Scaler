package Design_Pattern.factory.assignments.abstract_factory.documentProcessing.printer;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.DocumentType;
import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor.DocumentProcessor;


public class SpreadsheetDocumentPrinter extends DocumentPrinter{
    public SpreadsheetDocumentPrinter(DocumentProcessor processor) {
        super(processor);
    }

    public void printDocument() {
        // Print spreadsheet document
    }

    @Override
    public DocumentType supportsType() {
        return DocumentType.SPREAD_SHEET;
    }
}
