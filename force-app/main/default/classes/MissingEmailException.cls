public class MissingEmailException extends Exception {
    public String errorDetails;

   
    public MissingEmailException( String details , string s) {
        this.errorDetails = details;
    }


    public String getFormattedMessage() {
        return 'MissingEmailException: ' + getMessage() + ' | Details: ' + errorDetails;
    }
}