public class BusinessRuleException extends Exception {
    public String errorCode;
    public String customMessage;

    
public BusinessRuleException(String errorCode, String customMessage) {
        
        this.errorCode = errorCode;
        this.customMessage = customMessage;
    }

    

    
    public String getFormattedError() {
        return 'Error Code: ' + errorCode + ' | Message: ' + customMessage;
    }
}