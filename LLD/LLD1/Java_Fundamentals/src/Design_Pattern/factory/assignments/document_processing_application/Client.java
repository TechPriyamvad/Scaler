package Design_Pattern.factory.assignments.document_processing_application;

public class Client {
    public static void main(String[] args) {
        DocumentProcessor textDocumentProcessor = DocumentProcessorFactory.createDocumentProcessorByDocumentType(DocumentType.TEXT, "Text Document");
        DocumentProcessor presentationDocumentProcessor = DocumentProcessorFactory.createDocumentProcessorByDocumentType(DocumentType.PRESENTATION, "PRESENTATION Document");
        DocumentProcessor spreadsheetDocumentProcessor = DocumentProcessorFactory.createDocumentProcessorByDocumentType(DocumentType.SPREAD_SHEET, "SPREAD_SHEET Document");
        textDocumentProcessor.processDocument();
        presentationDocumentProcessor.processDocument();
        spreadsheetDocumentProcessor.processDocument();
    }
}
