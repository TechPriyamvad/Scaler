package Design_Pattern.factory.assignments.document_processing_application;

//Task 1 - Creating a Common Parent Class - Product Hierarchy
public abstract class DocumentProcessor {

    private String documentName;
    public abstract DocumentType supportsType();

    public abstract String getDocumentName();
    public abstract void processDocument();

}
