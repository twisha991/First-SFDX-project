public class ContactHandler {
    public static void createContact(string FirstName, string LastName){
        contact c= new contact(firstname=FirstName,lastname=LastName);
        insert c;
    }
    public static void updateContactEmail(id contactId ,string email){
        contact c=[select id , email from contact where id =: contactId];
        c.email=email;
        update c;
    }
}