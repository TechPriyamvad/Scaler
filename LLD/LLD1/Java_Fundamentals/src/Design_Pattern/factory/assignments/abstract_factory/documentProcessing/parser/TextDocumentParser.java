package Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.DocumentType;

public class TextDocumentParser extends DocumentParser {
    public TextDocumentParser(String path) {
        super(path);
    }

    public void parseDocument() {
        // Parse text document
    }

    @Override
    public DocumentType supportsType() {
        return DocumentType.TEXT;
    }
}
