@isTest
public class TestDataFactory {
    public static Account createAccount(String name, String industry){
        Account acc = new Account(Name = name,Industry = industry);
        insert acc;
        return acc;
       
    }
    
    public static contact createContact(){
    contact c=new contact(LastName='TestName');
        insert c;
        return c;         
        
    }
}