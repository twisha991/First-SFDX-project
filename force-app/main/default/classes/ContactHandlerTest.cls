@isTest
public class ContactHandlerTest {
    @isTest
    public static void testCreateContact(){
        ContactHandler.createContact('Twisha', 'Kumar');
        
        contact c=[select id,  FirstName from contact where FirstName= 'Twisha'];
        system.assertEquals('Twisha',c.FirstName);
    }
    
    @isTest
    public static void testUpdateContactEmail(){
        contact c =TestDataFactory.createContact();
        ContactHandler.UpdateContactEmail(c.Id,'abc@gmail.com');
        
        contact testc=[select id,email from contact where id = :c.id];
        system.assertEquals('abc@gmail.com',testc.Email);
        
        
    }

}