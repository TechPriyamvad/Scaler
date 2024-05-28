package Design_Pattern.factory.assignments.abstract_factory.documentProcessing.processor;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.DocumentType;

public abstract class DocumentProcessor {
    private String documentName;

    public DocumentProcessor(String documentName) {
        this.documentName = documentName;
    }

    public String getDocumentName() {
        return documentName;
    }

    public abstract void processDocument();

    public abstract DocumentType supportsType();
}
