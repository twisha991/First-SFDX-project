public class ContactTitleUpdater {

    @future
    public static void updateContactTitles(List<Id> contactIds) {
        // Query the contacts to be updated
        List<Contact> contactsToUpdate = [SELECT Id, Title FROM Contact WHERE Id IN :contactIds];

        // Update the Title field
        for (Contact c : contactsToUpdate) {
            c.Title = 'Customer Success Manager';
        }

        // Perform the update
        update contactsToUpdate;
    }
}