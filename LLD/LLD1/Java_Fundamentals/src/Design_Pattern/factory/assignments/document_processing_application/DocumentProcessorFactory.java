package Design_Pattern.factory.assignments.document_processing_application;

public class DocumentProcessorFactory {
    public static DocumentProcessor createDocumentProcessorByDocumentType(DocumentType documentType, String documentName) {
        DocumentProcessor documentProcessor = null;
        switch (documentType) {
            case TEXT:
                documentProcessor = new TextDocumentProcessor(documentName);
                break;
            case PRESENTATION:
                documentProcessor = new PresentationDocumentProcessor(documentName);
                break;
            case SPREAD_SHEET:
                documentProcessor = new SpreadsheetDocumentProcessor(documentName);
                break;
        }
        return documentProcessor;
    }
}
