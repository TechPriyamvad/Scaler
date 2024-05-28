package Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.DocumentType;

public class SpreadsheetDocumentParser extends DocumentParser{
    public SpreadsheetDocumentParser(String path) {
        super(path);
    }

    public void parseDocument() {
        // Parse spreadsheet document
    }

    @Override
    public DocumentType supportsType() {
        return DocumentType.SPREAD_SHEET;
    }
}
