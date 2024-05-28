package Design_Pattern.factory.assignments.abstract_factory.documentProcessing.parser;

import Design_Pattern.factory.assignments.abstract_factory.documentProcessing.DocumentType;

public abstract class DocumentParser {
    private final String path;

    public DocumentParser(String path) {
        this.path = path;
    }

    public abstract void parseDocument();

    public String getPath() {
        return path;
    }

    public abstract DocumentType supportsType();
}
