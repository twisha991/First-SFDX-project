@isTest
public class AccountTriggerTest {

    @isTest
    public static void testAccountTrigger(){
        Account acc = new Account(Name='Acme');
        insert acc;
        
        // Assignment - use TestDataFactory to set the data
        
        Account insertAcc = [SELECT Name FROM Account WHERE Id=:acc.Id];
		System.assertEquals('Acme-Verified', insertAcc.Name);   
    }
}