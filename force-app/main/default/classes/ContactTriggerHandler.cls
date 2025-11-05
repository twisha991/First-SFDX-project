public class ContactTriggerHandler {
    public static void beforeInsert(List<Contact> newContacts) {
        for (Contact c : newContacts) {
            try {
                if (String.isBlank(c.Email)) {
                    throw new MissingEmailException('Email is required for Contact.');
                }
            } catch (MissingEmailException e) {
               
                System.debug('MissingEmailException: ' + e.getMessage());
                c.addError(e.getMessage()); 
            }
        }
    }
}